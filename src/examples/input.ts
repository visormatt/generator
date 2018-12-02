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
    message: 'Example Input',
    name: 'example-input',
    type: 'input'
  }
];

const input = () => inquirer.prompt(QUESTIONS);

export { input };
