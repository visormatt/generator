// Vendor
import inquirer from 'inquirer';
import { Validation } from '../utils/validation';

const questions = [
  {
    default: 'Matthew D. Scholta',
    name: 'author',
    type: 'input',
    validate: Validation.required
  },
  {
    default: 'https://www.mattscholta.com',
    name: 'domain',
    type: 'input',
    validate: Validation.required
  }
];

const setup = () => inquirer.prompt(questions);

export { setup };
