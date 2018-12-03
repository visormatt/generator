const existsSync = jest.fn();
const readFileSync = jest.fn();
const writeFileSync = jest.fn();

jest.mock('fs', () => ({
  existsSync,
  readFileSync,
  writeFileSync
}));

// Internal
import { readFile, writeFile } from '../files';

describe('files', () => {
  const path = '/some/path/file.js';

  it('should export the following methods', () => {
    expect(typeof readFile).toBe('function');
    expect(typeof writeFile).toBe('function');
  });

  describe('readFile', () => {
    it('should call these methods', () => {
      readFile(path);
      expect(readFileSync).toHaveBeenCalledWith(path, 'utf8');
    });
  });

  describe('writeFile', () => {
    let fn: any;

    beforeEach(() => {
      fn = writeFile(path);
    });

    it('should return a function', () => {
      expect(typeof fn).toBe('function');
    });

    it('should throw when there is an error', () => {
      expect(() => {
        fn('an error', false);
      }).toThrowError();
    });

    it('Which calls the FS', () => {
      const error = false;
      const payload = 'payload';
      fn(error, payload);

      expect(writeFileSync).toHaveBeenCalledWith(path, payload, 'utf8');
    });
  });
});
