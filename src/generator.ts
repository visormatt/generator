// Vendor
import ejs from 'ejs';
import fs from 'fs';
import inquirer from 'inquirer';

// Internal
import {
  checkFile,
  createDirectory,
  rename,
  renameFile,
  writeFile
} from './utils/files';
import { logger } from './utils/logger';
import { Validation } from './utils/validation';
import { FILE_CUSTOMIZE, PATH_CURRENT } from './utils/config';

/**
 * @name createFile
 * @description tbd...
 */
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
  const path = `${PATH_CURRENT}/${destination}`;

  if (stats.isFile()) {
    const filename = renameFile(file, data);
    const writePath = `${path}/${filename}`;

    ejs.renderFile(templatePath, data, writeFile(writePath));
  } else {
    const filename = rename(file, data);
    const newDestination = `${destination}/${filename}`;

    createDirectory(newDestination);
    copyTemplate(templatePath, newDestination, data);
  }
};

type MixedQuestions =
  | inquirer.InputQuestionOptions
  | inquirer.ListQuestionOptions;

/**
 * @name createQuestions
 * @description We may or may not require information when generating
 * our questions. This is one way we can tackle that.
 */
const createQuestions = (data: any): MixedQuestions[] => {
  const { questions, templates } = data;
  const templateArray = fs.readdirSync(templates);

  const templatingQuestions = questions?.map((question: string) => ({
    name: question,
    type: 'input',
    message: `Output ${question}:`,
    validate: Validation.required
  })) ?? [{
    name: 'name',
    type: 'input',
    message: 'Output name:',
    validate: Validation.required
  }];

  return [
    {
      // default: templateArray.length - 1,
      name: 'type',
      type: 'list',
      message: 'Select a template:',
      choices: templateArray
    },
    ...templatingQuestions
  ];
};

/**
 * @name copyTemplate
 * @description tbd...
 */
const copyTemplate = (template: string, destination: string, data: any) => {
  const filesToCreate = fs.readdirSync(template);

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

  return await inquirer
    .prompt(questions)
    .then(async (answers: inquirer.Answers) => {
      const { name, type } = answers;
      const { templates } = config;

      const fullConfig = { ...answers, ...config };
      const path = `${templates}/${type}`;
      const pathQuestions = `${path}/${FILE_CUSTOMIZE}`;
      const hasQuestions = checkFile(pathQuestions);

      let templateAnswers = {};

      if (hasQuestions) {
        const templateQuestions = require(pathQuestions);

        if (typeof templateQuestions === 'function') {
          const questions = templateQuestions(fullConfig);
          templateAnswers = await inquirer.prompt(questions);
        } else {
          templateAnswers = await inquirer.prompt(templateQuestions);
        }
      } else {
        // tslint:disable-next-line
        const msg = `Tip: Create a "${FILE_CUSTOMIZE}" file to further customize.`;
        logger('\n💭', msg);
      }

      const data = {
        ...config,
        ...answers,
        ...templateAnswers,
        name,
        slug: 'TestingItOut'
      };

      fs.mkdirSync(`${PATH_CURRENT}/${name}`);
      copyTemplate(path, name, data);
    });
};

export { createFile, createQuestions, copyTemplate, generator, renameFile };
