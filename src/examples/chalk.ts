// Vendor
import chalkPipe from 'chalk-pipe';
import inquirer from 'inquirer';

const prompts = [
  {
    name: 'fav_color',
    message: "What's your favorite color",
    transformer(color: string) {
      return chalkPipe(color)(color);
    },
    type: 'input'
  }
];

const chalk = () => inquirer.prompt(prompts);

export { chalk };
