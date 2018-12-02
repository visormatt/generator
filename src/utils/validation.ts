// Internal
import { REGEX_VALID_PACKAGE } from '../utils/regex';

const Validation = {
  required(input?: any) {
    if (input && input.trim() !== '') return true;
    return 'This input is required.';
  },

  slug(input?: string) {
    if (!input) return this.required();
    if (input && REGEX_VALID_PACKAGE.test(input)) return true;

    return 'Allowed characters are; letters, numbers, underscores and hashes.';
  }
};

export { Validation };
