// Vendor
import inquirer from 'inquirer';

const QUESTIONS = [
  {
    message: 'Example Password',
    name: 'example-password',
    type: 'password'
  }
];

const password = () => inquirer.prompt(QUESTIONS);

export { password };
