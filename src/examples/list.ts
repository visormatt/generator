// Vendor
import inquirer from 'inquirer';

const choices = [
  { checked: true, name: 'Choice A' },
  { checked: false, name: 'Choice B' },
  new inquirer.Separator(),
  { checked: false, name: 'Choice C' },
  { checked: true, name: 'Choice D' }
];

const questions: inquirer.ListQuestionOptions[] = [
  {
    choices,
    message: 'Example List',
    name: 'example-list',
    type: 'list'
  }
];

const list = (): Promise<any> => inquirer.prompt(questions);

export { list };
