const renderFile = jest.fn(() => 'success');
const readdirSync = jest.fn(() => ['file_one.txt', 'file_two.js']);
const statSync = jest.fn(() => ({ isFile: () => true }));

jest.mock('ejs', () => ({ renderFile }));
jest.mock('fs', () => ({ readdirSync, statSync }));

import {
  copyTemplate,
  createFile,
  createQuestions,
  generator,
  renameFile
} from '../generator';
import { FILE_CUSTOMIZE } from '../utils/config';

describe('generator', () => {
  beforeEach(() => {
    renderFile.mockClear();
    readdirSync.mockClear();
    statSync.mockClear();
  });

  it('should export the following functions', () => {
    expect(typeof createQuestions).toBe('function');
    expect(typeof copyTemplate).toBe('function');
    expect(typeof generator).toBe('function');
    expect(typeof renameFile).toBe('function');
  });

  /**
   * @ copyTemplate
   */
  describe('copyTemplate', () => {
    const template = '/path/to/templates';
    const destination = '/path/to/templates';
    const data = {};

    it('should call "fs.readdirSync"', () => {
      copyTemplate(template, destination, data);
      expect(readdirSync).toHaveBeenCalledWith(template);
    });
  });

  /**
   * @ createFile
   */
  describe('createFile', () => {
    const file = 'test.txt';
    const template = '/path/to/templates';
    const destination = '/path/to/templates';
    const data = {};

    it('should not call "fs.statSync" when its our config file', () => {
      createFile(FILE_CUSTOMIZE, template, destination, data);
      expect(statSync).not.toHaveBeenCalled();
    });

    it('should call "fs.statSync" otherwise', () => {
      createFile(file, template, destination, data);
      expect(statSync).toHaveBeenCalledWith(`${template}/${file}`);
    });
  });

  /**
   * @ createQuestions
   */
  describe('createQuestions', () => {
    const templatePath = '/path/to/templates';

    it('should return 2 questions', async () => {
      const questions = await createQuestions({ templates: templatePath });
      expect(questions).toHaveLength(2);
    });

    it('should call "fs.readdirSync" to get the templates', async () => {
      await createQuestions({ templates: templatePath });
      expect(readdirSync).toHaveBeenCalledWith(templatePath);
    });
  });

  /**
   * @ renameFile
   */
  describe('renameFile', () => {
    const name = 'MyComponent';
    const data = { name };

    const before = '=name.txt';
    const unavailable = '=unavailable.txt';
    const after = 'MyComponent.txt';
    const filename = 'name.txt';

    it('should return the original name', () => {
      const result = renameFile(filename, data);
      expect(result).toBe(filename);
    });

    it('should rename the file', () => {
      const result = renameFile(before, data);
      expect(result).toBe(after);
    });

    it('should default to "index" as a name', () => {
      const result1 = renameFile(unavailable, data);
      expect(result1).toBe('index.txt');

      const result2 = renameFile(unavailable);
      expect(result2).toBe('index.txt');
    });

    it('should name it ', () => {
      const result = renameFile(unavailable, data);
      expect(result).toBe('index.txt');
    });
  });
});
