// Vendor
import ejs from 'ejs';
import fs from 'fs';
import inquirer from 'inquirer';

// Internal
import { checkFile, writeFile } from './utils/files';
import { logger } from './utils/logger';
import { Validation } from './utils/validation';
import { FILE_CUSTOMIZE, PATH_CURRENT } from './utils/config';

/**
 * @name createQuestions
 * @description We may or may not require information when generating
 * our questions. This is one way we can tackle that.
 */
const createQuestions = (data: any) => {
  const { templates } = data;

  // tslint:disable-next-line
  const name = `Lets give it a name, this will be used to create the directory as well.`;

  return [
    {
      default: 1,
      name: 'type',
      type: 'list',
      message: 'What project template would you like to generate?',
      choices: fs.readdirSync(templates)
    },
    {
      name: 'name',
      type: 'input',
      message: `${name}\n`,
      validate: Validation.required
    }
  ];
};

const createFile = (
  file: string,
  template: string,
  destination: string,
  data: any
) => {
  // This is only needed in the "template" folder for customization
  if (file === FILE_CUSTOMIZE) return;

  const templatePath = `${template}/${file}`;
  const stats = fs.statSync(templatePath);

  if (stats.isFile()) {
    const writePath = `${PATH_CURRENT}/${destination}/${file}`;
    ejs.renderFile(templatePath, data, writeFile(writePath));
  }
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
  const filesToCreate = fs.readdirSync(template);

  console.log('---> filesToCreate', filesToCreate);

  filesToCreate.forEach((file: string) => {
    createFile(file, template, destination, data);
  });
};

/**
 * @name generator
 * @description tbd...
 */
const generator = async (config: any) => {
  const questions = createQuestions(config);

  return await inquirer.prompt(questions).then(async (answers: any) => {
    const { name, type } = answers;
    const { templates } = config;
    const path = `${templates}/${type}`;
    const pathQuestions = `${path}/${FILE_CUSTOMIZE}`;
    const hasQuestions = checkFile(pathQuestions);

    let templateAnswers = {};

    if (hasQuestions) {
      const templateQuestions = require(pathQuestions);
      if (typeof templateQuestions === 'function') {
        templateAnswers = await inquirer.prompt(templateQuestions(config));
      } else {
        templateAnswers = await inquirer.prompt(templateQuestions);
      }
    } else {
      logger(`\n💭 Tip: Create a "${FILE_CUSTOMIZE}" file. \n`);
    }

    const data = {
      ...config,
      ...answers,
      ...templateAnswers,
      name,
      slug: 'TestingItOut'
    };

    // console.log('---> data ', data);

    fs.mkdirSync(`${PATH_CURRENT}/${name}`);
    createDirectoryContents(path, name, data);
  });
};

export { createQuestions, createDirectoryContents, generator };
