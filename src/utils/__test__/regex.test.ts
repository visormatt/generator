import { REGEX_VALID_PACKAGE } from '../regex';

const newRegex = (exp: any) => new RegExp(exp);

describe('regex', () => {
  it('should export the following regular expressions', () => {
    expect(REGEX_VALID_PACKAGE).toBeTruthy();
  });

  describe('REGEX_VALID_PACKAGE', () => {
    let regex;

    beforeEach(() => {
      regex = newRegex(REGEX_VALID_PACKAGE);
    });

    it('should return true', () => {
      expect(REGEX_VALID_PACKAGE.test('valid-package-name')).toBeTruthy();
    });

    it('should return false', () => {
      expect(REGEX_VALID_PACKAGE.test('not valid')).toBeFalsy();
    });
  });
});
