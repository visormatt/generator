// Vendor
import ejs from 'ejs';
import fs from 'fs';
import inquirer from 'inquirer';

// Internal
import { Validation } from './utils/validation';
import { checkFile, readFile, writeFile } from './utils/files';
import { PATH_CURRENT, PATH_PACKAGE } from './utils/config';
import { logger } from './utils/logger';

/**
 * @name createQuestions
 * @description We may or may not require information when generating
 * our questions. This is one way we can tackle that.
 */
const createQuestions = (data: any) => {
  const { templates } = data;

  return [
    {
      name: 'template',
      type: 'list',
      message: 'What project template would you like to generate?',
      choices: fs.readdirSync(templates)
    },
    {
      default: 'AnExampleComponent',
      name: 'name',
      type: 'input',
      message: 'Project name:',
      validate: Validation.required
    }
  ];
};

/**
 * @name createDirectoryContents
 * @description tbd...
 */
const createDirectoryContents = (
  template: string,
  destination: string,
  data: any
) => {
  const createFile = (file: string) => {
    // This is only needed in the "template"
    if (file === '.generator.js') return;

    const templatePath = `${template}/${file}`;
    const stats = fs.statSync(templatePath);

    if (stats.isFile()) {
      const writePath = `${PATH_CURRENT}/${destination}/${file}`;
      ejs.renderFile(templatePath, data, writeFile(writePath));
    }
  };

  const filesToCreate = fs.readdirSync(template);
  const { name } = data;

  filesToCreate.forEach(createFile);
};

/**
 * @name generator
 * @description tbd...
 */
const generator = async (config: any) => {
  const questions = createQuestions(config);

  return await inquirer.prompt(questions).then(async (answers: any) => {
    const { name, template } = answers;
    const { templates } = config;

    console.log('---- templates', templates);

    const path = `${templates}/${template}`;
    const pathQuestions = `${path}/.generator.js`;
    console.log('=== pathQuestions', pathQuestions);

    const hasQuestions = checkFile(pathQuestions);

    let templateAnswers = {};

    if (hasQuestions) {
      try {
        const templateQuestions = require(pathQuestions);
        templateAnswers = await inquirer.prompt(templateQuestions);
      } catch (error) {
        console.error('---> error', error);
      }
    } else {
      logger('💭 Tip: Create a `.generator.js` file in the folder');
    }

    const data = {
      ...config,
      ...answers,
      ...templateAnswers,
      name,
      slug: 'TestingItOut'
    };

    console.log('---> data ', data);

    fs.mkdirSync(`${PATH_CURRENT}/${name}`);
    createDirectoryContents(path, name, data);
  });
};

export { generator };
