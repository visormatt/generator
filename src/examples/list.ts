// Vendor
import inquirer from 'inquirer';

const CHOICES = [
  { checked: true, name: 'Choice A' },
  { checked: false, name: 'Choice B' },
  new inquirer.Separator(),
  { checked: false, name: 'Choice C' },
  { checked: true, name: 'Choice D' }
];

const QUESTIONS = [
  {
    choices: CHOICES,
    message: 'Example List',
    name: 'example-list',
    type: 'list'
  }
];

const list = () => inquirer.prompt(QUESTIONS);

export { list };
