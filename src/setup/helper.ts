// Internal
import findUp from 'find-up';
import { readConfig, writeConfig } from './config';
import { FILE_CONFIG } from '../utils/config';

/**
 * @name checkForSettings
 * @description First we need to check for a configuration file.
 * This lets us create many configurations by simply adding a file.
 */
const checkForSettings = async () => {
  const config = await findUp(FILE_CONFIG);

  if (config) return readConfig(config);

  return writeConfig();
};

export { checkForSettings };
