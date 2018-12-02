// Vendor
import fs from 'fs';

// Internal
import { PACKAGE_ROOT } from '../utils/config';
import { validation } from '../utils/validation';

// const CHOICES = fs.readdirSync(`${__dirname}/templates`);
const CHOICES = fs.readdirSync(`${PACKAGE_ROOT}/templates`);

const QUESTIONS = [
  {
    name: 'project-choice',
    type: 'list',
    message: 'What project template would you like to generate?',
    choices: CHOICES
  },
  {
    name: 'project-name',
    type: 'input',
    message: 'Project name:',
    validate: validation
  }
];

export { QUESTIONS };
