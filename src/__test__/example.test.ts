// Internal
import { sum } from '../example';

describe('adds 1 + 2 to equal 3', () => {
  it('should add the values', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
