// Internal
import { resolve } from 'path';

// Internal
import { writeFile } from '../files';

describe('files', () => {
  it('should export the following methods', () => {
    expect(typeof writeFile).toBe('function');
  });

  it('should return a function', () => {
    expect(typeof writeFile('/some/file/path')).toBe('function');
  });

  it('should throw an error', () => {
    const callback = writeFile('/some/file/test.txt');
    expect(() => {
      callback('An error string', 'file contents');
    }).toThrow();
  });

  it('should write a file', () => {
    const path = resolve(__dirname, '../../__test__');
    const callback = writeFile(`${path}/template.txt`);
    const file = callback(null, 'some value in here');

    expect(file).toBe(undefined);
  });
});
