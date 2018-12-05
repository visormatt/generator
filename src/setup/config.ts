// Vendor
import chalk from 'chalk';
import { resolve } from 'path';

// Internal
import { setup } from './index';
import { logger } from '../utils/logger';
import { readFile, renderTemplate } from '../utils/files';
import { FILE_CONFIG, PATH_CURRENT } from '../utils/config';
import {
  MSG_SETUP_DEFAULT,
  MSG_SETUP_REQUIRED,
  MSG_SETUP_SUCCESS
} from './constants';

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
  let message = MSG_SETUP_DEFAULT;

  if (prompt) {
    message = MSG_SETUP_REQUIRED;
  }

  logger(chalk.red(message));

  // Otherwise we create em
  const data = await setup();
  const template = resolve(__dirname, `../../src/${FILE_CONFIG}`);
  const destination = resolve(PATH_CURRENT, FILE_CONFIG);
  const path = chalk.greenBright(destination);

  renderTemplate(template, destination, data);
  logger(MSG_SETUP_SUCCESS(path));

  return data;
};

export { readConfig, writeConfig };
