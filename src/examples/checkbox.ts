// Vendor
import inquirer from 'inquirer';

const choices = [
  { checked: true, name: 'Choice A' },
  new inquirer.Separator(),
  { checked: true, name: 'Choice B' },
  new inquirer.Separator(),
  { checked: true, name: 'Choice C' },
  { checked: true, name: 'Choice D' }
];

const questions = [
  {
    choices,
    message: 'Example Checkbox',
    name: 'example-checkbox'
    // type: 'confim'
  }
];

const checkbox = () => inquirer.prompt(questions);

export { checkbox };
