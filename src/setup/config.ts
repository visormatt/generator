// Vendor
import chalk from 'chalk';
import { resolve } from 'path';

// Internal
import { setup } from './index';
import { logger } from '../utils/logger';
import { readFile, renderTemplate } from '../utils/files';
import { PATH_CURRENT } from '../utils/config';

const readConfig = async (path: string) => {
  const file = readFile(path);
  const json = JSON.parse(file);
  const pretty = JSON.stringify(json, null, 2);

  const message = `👀 Configuration file: ${chalk.cyan(path)} \n`;
  logger(message);
  // logger(message, pretty);

  return json;
};

const writeConfig = async () => {
  const message = '⚠️  No configuration file found, running setup.\n';
  logger(chalk.red(message));

  // Otherwise we create em
  const data = await setup();
  const template = resolve(__dirname, '../../src/setup/.generator.config');
  const destination = resolve(PATH_CURRENT, '.generator.config');
  const path = chalk.greenBright(destination);

  renderTemplate(template, destination, data);
  logger(`\n✅ Configuration file created: ${path} \n`);

  return data;
};

export { readConfig, writeConfig };
