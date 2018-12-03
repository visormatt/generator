// Vendor
import chalk from 'chalk';
import { resolve } from 'path';

// Internal
import { setup } from './index';
import { logger } from '../utils/logger';
import { readFile, renderTemplate } from '../utils/files';
import { FILE_CONFIG, PATH_CURRENT } from '../utils/config';

/**
 * @name readConfig
 * @description tbd...
 */
const readConfig = (path: string) => {
  const file = readFile(path);
  const json = JSON.parse(file);
  const message = `👀 Configuration file: ${chalk.cyan(path)} \n`;
  logger(message);

  return json;
};

/**
 * @name writeConfig
 * @description tbd...
 */
const writeConfig = async (prompt = true) => {
  let message = 'Running generator setup.\n';

  if (prompt) {
    message = '⚠️  No configuration file found, running setup.\n';
  }

  logger(chalk.red(message));

  // Otherwise we create em
  const data = await setup();
  const template = resolve(__dirname, `../../src/${FILE_CONFIG}`);
  const destination = resolve(PATH_CURRENT, FILE_CONFIG);
  const path = chalk.greenBright(destination);

  renderTemplate(template, destination, data);
  logger(`\n✅ Configuration file created: ${path} \n`);

  return data;
};

export { readConfig, writeConfig };
