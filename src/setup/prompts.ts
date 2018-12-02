// Vendor
import inquirer from 'inquirer';
import { Validation } from '../utils/validation';

const setup = [
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

const prompts = [
  {
    choices: [
      {
        name: 'Run a generator',
        value: 'generator'
      },
      {
        name: 'Run setup',
        value: 'setup'
      }
    ],
    message: '🛠️  Bootstrapper 🛠️',
    name: 'command',
    type: 'list'
  }
];

const prompt = () => inquirer.prompt(setup);

export { prompts, prompt };
