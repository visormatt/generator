const existsSync = jest.fn();
const readFileSync = jest.fn();
const renderFile = jest.fn();
const writeFileSync = jest.fn();

jest.mock('ejs', () => ({ renderFile }));
jest.mock('fs', () => ({ existsSync, readFileSync, writeFileSync }));

// Internal
import {
  checkFile,
  readFile,
  renameFile,
  renderTemplate,
  writeFile
} from '../files';

describe('files', () => {
  const path = '/some/path/file.js';

  beforeEach(() => {
    existsSync.mockClear();
    readFileSync.mockClear();
    renderFile.mockClear();
    writeFileSync.mockClear();
  });

  it('should export the following methods', () => {
    expect(typeof readFile).toBe('function');
    expect(typeof writeFile).toBe('function');
  });

  /**
   * @ checkFile
   */
  describe('checkFile', () => {
    const path = 'test_path';

    it('should call "fs.existsSync"', () => {
      checkFile(path);
      expect(existsSync).toHaveBeenCalledWith(path);
    });
  });

  /**
   * @ readFile
   */
  describe('readFile', () => {
    it('should call "fs.readFileSync"', () => {
      readFile(path);
      expect(readFileSync).toHaveBeenCalledWith(path, 'utf8');
    });
  });

  /**
   * @ renameFile
   */
  describe.only('renameFile', () => {
    const data = { name: 'example' };

    const testCSS1 = '=name.css';
    const testCSS2 = '=name.css.d.ts';
    const testTS = '=name.ts';

    it('should rename these files using the data provide', () => {
      expect(renameFile(testCSS1, data)).toBe('example.css');
      expect(renameFile(testCSS2, data)).toBe('example.css.d.ts');
      expect(renameFile(testTS, data)).toBe('example.ts');
    });

    it('should rename these files to "index"', () => {
      expect(renameFile(testCSS1)).toBe('index.css');
      expect(renameFile(testCSS2)).toBe('index.css.d.ts');
      expect(renameFile(testTS)).toBe('index.ts');
    });
  });

  /**
   * @ renderTemplate
   */
  describe('renderTemplate', () => {
    const testTemplate = 'test_template';
    const testDestination = 'test_destimation';
    const testData = { test_key: 'test_value' };

    it('should call the "ejs.renderFile" method', () => {
      renderTemplate(testTemplate, testDestination, testData);
      expect(renderFile).toHaveBeenCalled();
    });
  });

  /**
   * @ writeFile
   */
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
