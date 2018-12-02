// Internal
import { checkbox } from '../checkbox';
import { confirm } from '../confirm';
import { input } from '../input';
import { list } from '../list';
import { password } from '../password';

describe('Examples', () => {
  it('should export some examples', () => {
    expect(typeof checkbox).toBe('function');
    expect(typeof confirm).toBe('function');
    expect(typeof input).toBe('function');
    expect(typeof list).toBe('function');
    expect(typeof password).toBe('function');
  });

  // it('should run', () => {
  //   expect(checkbox()).toBe(false);
  //   expect(confirm()).toBe(false);
  // });
});
