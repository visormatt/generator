import inquirer from 'inquirer';

const choices = [
  { checked: true, name: 'Choice A' },
  new inquirer.Separator(),
  { checked: true, name: 'Choice B' },
  new inquirer.Separator(),
  { checked: true, name: 'Choice C' },
  { checked: true, name: 'Choice D' }
];

const questions: inquirer.CheckboxQuestionOptions[] = [
  {
    choices,
    message: 'Example Checkbox',
    name: 'example-checkbox'
    // type: 'confim'
  }
];

const checkbox = (): Promise<any> => inquirer.prompt(questions);

export { checkbox };
