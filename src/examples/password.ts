// Vendor
import inquirer from 'inquirer';

const questions: inquirer.Questions = [
  {
    message: 'Example Password',
    name: 'example-password',
    type: 'password'
  }
];

const password = () => inquirer.prompt(questions);

export { password };
