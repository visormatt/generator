// Vendor
import fs from 'fs';
import inquirer from 'inquirer';

// Internal
import { validation } from '../utils/validation';
import { PACKAGE_ROOT } from '../utils/config';

// const CHOICES = fs.readdirSync(`${__dirname}/templates`);
const CHOICES = fs.readdirSync(`${PACKAGE_ROOT}/templates`);

const QUESTIONS = [
  {
    name: 'project-choice',
    type: 'list',
    message: 'What project template would you like to generate?',
    choices: CHOICES
  },
  // new inquirer.Separator(),
  {
    name: 'project-name',
    type: 'input',
    message: 'Project name:',
    validate: validation
  }
];

export { QUESTIONS };
