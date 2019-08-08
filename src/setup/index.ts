// Vendor
import inquirer from 'inquirer';

// Internal
import { Validation } from '../utils/validation';
import { PATH_PACKAGE } from '../utils/config';

/**
 * @description Here we collect some basic information that we store in
 * config file and make available to all templates at runtime.
 */
const questions: inquirer.Question[] = [
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
    default: '@visormatt',
    name: 'organization',
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

const setup = (): Promise<any> => inquirer.prompt(questions);

export { setup };
