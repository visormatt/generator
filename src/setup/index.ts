// Internal
import chalk from 'chalk';
import findUp from 'find-up';
import { prompt } from './prompts';
import { resolve } from 'path';
import { readFile, renderTemplate } from '../utils/files';
import { NAME_CONFIGURATION, PATH_CURRENT } from '../utils/config';

/**
 * First we need to check for a configuration file. This lets us create
 * many configurations by simply adding a file
 */
const checkForSettings = async () => {
  const settings = await findUp(NAME_CONFIGURATION);

  if (settings) {
    const data = await prompt();
    const template = resolve(__dirname, '../../templates/.generator.config');
    const destination = resolve(__dirname, '.generator.config');
    console.log('----> data', data);

    renderTemplate(template, destination, data);
  }

  // if (settings) {
  //   const file = readFile(settings);
  //   const json = JSON.parse(file);
  //   const pretty = JSON.stringify(json, null, 2);

  //   console.log(`Using configuration file: ${chalk.cyan(settings)}`);
  //   console.log(pretty);

  //   return json;
  // }

  // console.error(
  //   'Configuration file not found, would you like to run the setup?'
  // );
};

export { checkForSettings };
