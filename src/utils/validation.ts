// Internal
import { REGEX_VALID_PACKAGE } from '../utils/regex';

const validation = (input: string) => {
  if (REGEX_VALID_PACKAGE.test(input)) {
    return true;
  }

  return 'Project name may only include letters, numbers, underscores and hashes.';
};

export { validation };
