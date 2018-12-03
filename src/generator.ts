// Vendor
import ejs from 'ejs';
import fs from 'fs';
import inquirer from 'inquirer';

// Internal
import { Validation } from './utils/validation';
import { checkFile, readFile, writeFile } from './utils/files';
import { PATH_CURRENT, PATH_PACKAGE } from './utils/config';
import { logger } from './utils/logger';

const questions = [
  {
    name: 'template',
    type: 'list',
    message: 'What project template would you like to generate?',
    choices: fs.readdirSync(`${PATH_PACKAGE}/templates`)
  },
  {
    default: 'AnExampleComponent',
    name: 'name',
    type: 'input',
    message: 'Project name:',
    validate: Validation.required
  }
];

const createDirectoryContents = (
  template: string,
  destination: string,
  data: any
) => {
  const createFile = (file: string) => {
    const templatePath = `${template}/${file}`;
    const templateData = { ...data, name };
    const stats = fs.statSync(templatePath);

    if (stats.isFile()) {
      const writePath = `${PATH_CURRENT}/${destination}/${file}`;
      ejs.renderFile(templatePath, templateData, writeFile(writePath));
    }
  };

  const filesToCreate = fs.readdirSync(template);
  const { name } = data;

  filesToCreate.forEach(createFile);
};

const generator = async (config: any) =>
  await inquirer.prompt(questions).then(async (answers: any) => {
    const { name, template } = answers;
    const path = `${PATH_PACKAGE}/templates/${template}`;
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

export { generator };
