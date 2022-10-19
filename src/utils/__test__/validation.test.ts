import { Validation } from '../validation';

describe('Validation', () => {
  let method: (...args: any) => any;

  describe('required', () => {
    beforeEach(() => {
      method = Validation.required;
    });

    it('should pass', () => {
      expect(method(true)).toBe(true);
      expect(method('valid')).toBe(true);
      expect(method('valid-package-name')).toBe(true);
    });

    it('should fail', () => {
      expect(method(false)).not.toBe(true);
      expect(method()).not.toBe(true);
      expect(method('')).not.toBe(true);
    });
  });

  describe('slug', () => {
    beforeEach(() => {
      method = Validation.slug;
    });

    it('should pass', () => {
      expect(method('valid-package-name')).toBe(true);
    });

    it('should fail', () => {
      expect(method()).not.toBe(true);
      expect(method('')).not.toBe(true);
    });

    it('should return an error message', () => {
      const result = method('not a valid name');
      expect(typeof result).toBe('string');
    });
  });
});
