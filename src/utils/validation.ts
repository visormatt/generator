// Internal
import { REGEX_VALID_PACKAGE } from '../utils/regex';

/**
 * @name Validation
 * @description Helper object for validating our user inputs
 */
const Validation = {
  /**
   * @name Validation.required
   * @description Validate the present of a value, we also check that
   * any string values aren't empty
   */
  required(input: any = false) {
    if (typeof input === 'boolean') return input;
    if (input.trim() !== '') return true;

    return 'This input is required.';
  },

  /**
   * @name Validation.slug
   * @description Slugs must be lowercased and can only contain certain
   * letters, numbers and seperators
   */
  slug(input?: string) {
    if (!input) return Validation.required();
    if (input && REGEX_VALID_PACKAGE.test(input)) return true;

    return 'Allowed characters are; letters, numbers, underscores and hashes.';
  }
};

export { Validation };
