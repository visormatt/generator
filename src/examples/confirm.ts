// Vendor
import inquirer from 'inquirer';

const QUESTIONS = [
  {
    default: true,
    message: 'Example Confirm',
    name: 'example-confirm',
    type: 'confirm'
  }
];

const confirm = () => inquirer.prompt(QUESTIONS);

export { confirm };
