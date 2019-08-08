// Vendor
import inquirer from 'inquirer';

const questions: inquirer.InputQuestionOptions[] = [
  {
    message: 'Example Input',
    name: 'example-input',
    type: 'input'
  }
];

const input = (): Promise<any> => inquirer.prompt(questions);

export { input };
