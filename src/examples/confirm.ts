// Vendor
import inquirer from 'inquirer';

const questions: inquirer.Questions = [
  {
    default: true,
    message: 'Example Confirm',
    name: 'example-confirm',
    type: 'confirm'
  }
];

const confirm = () => inquirer.prompt(questions);

export { confirm };
