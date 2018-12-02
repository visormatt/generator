// Internal
import { validation } from '../validation';

describe('validation', () => {
  it('should pass', () => {
    expect(validation('valid-package-name')).toBe(true);
  });

  it('should fail', () => {
    expect(validation('not valid name')).not.toBe(true);
  });
});
