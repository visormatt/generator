// Internal
import { readFile, writeFile } from '../files';

// These will be hoisted
jest.mock('fs');

describe('files', () => {
  it('should export the following methods', () => {
    expect(typeof readFile).toBe('function');
    expect(typeof writeFile).toBe('function');
  });
});
