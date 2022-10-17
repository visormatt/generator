import inquirer from 'inquirer';

const questions: inquirer.PasswordQuestionOptions[] = [
  {
    message: 'Example Password',
    name: 'example-password',
    type: 'password'
  }
];

const password = (): Promise<any> => inquirer.prompt(questions);

export { password };
