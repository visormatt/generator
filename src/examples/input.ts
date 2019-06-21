// Vendor
import inquirer from 'inquirer';

const questions: inquirer.Questions = [
  {
    message: 'Example Input',
    name: 'example-input',
    type: 'input'
  }
];

const input = () => inquirer.prompt(questions);

export { input };
