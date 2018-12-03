// Vendor
import inquirer from 'inquirer';

// Internal
import { Validation } from '../utils/validation';
import { PATH_PACKAGE } from '../utils/config';

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
  },
  {
    default: `${PATH_PACKAGE}/templates`,
    name: 'templates',
    type: 'input',
    validate: Validation.required
  }
];

const setup = () => inquirer.prompt(questions);

export { setup };
