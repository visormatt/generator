import inquirer from 'inquirer';

const questions: inquirer.ConfirmQuestionOptions[] = [
  {
    default: true,
    message: 'Example Confirm',
    name: 'example-confirm',
    type: 'confirm'
  }
];

const confirm = (): Promise<any> => inquirer.prompt(questions);

export { confirm };
