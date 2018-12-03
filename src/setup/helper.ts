// Internal
import findUp from 'find-up';
import { readConfig, writeConfig } from './config';
import { NAME_CONFIGURATION } from '../utils/config';

/**
 * First we need to check for a configuration file. This lets us create
 * many configurations by simply adding a file
 */
const checkForSettings = async () => {
  const config = await findUp(NAME_CONFIGURATION);

  if (config) return readConfig(config);

  return writeConfig();
};

export { checkForSettings };
