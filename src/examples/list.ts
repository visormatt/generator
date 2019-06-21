// Vendor
import inquirer from 'inquirer';

const choices = [
  { checked: true, name: 'Choice A' },
  { checked: false, name: 'Choice B' },
  new inquirer.Separator(),
  { checked: false, name: 'Choice C' },
  { checked: true, name: 'Choice D' }
];

const questions: inquirer.Questions = [
  {
    choices,
    message: 'Example List',
    name: 'example-list',
    type: 'list'
  }
];

const list = () => inquirer.prompt(questions);

export { list };
