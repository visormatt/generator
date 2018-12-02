// Vendor
import inquirer from 'inquirer';

const CHOICES = [
  { checked: true, name: 'Choice A' },
  new inquirer.Separator(),
  { checked: true, name: 'Choice B' },
  new inquirer.Separator(),
  { checked: true, name: 'Choice C' },
  { checked: true, name: 'Choice D' }
];

const QUESTIONS = [
  {
    choices: CHOICES,
    message: 'Example Checkbox',
    name: 'example-checkbox',
    type: 'checkbox'
  }
];

const checkbox = () => inquirer.prompt(QUESTIONS);

export { checkbox };
