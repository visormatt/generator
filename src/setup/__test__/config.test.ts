const logger = jest.fn();
const mockResponse = { test_key: 'test_value' };
const renderTemplate = jest.fn();

const readFile = jest.fn(() => {
  return JSON.stringify(mockResponse);
});

const setup = jest.fn(() => ({
  test_key: 'test_value'
}));

// We just need to know these are triggered
jest.mock('../../utils/files', () => ({ readFile, renderTemplate }));
jest.mock('../../utils/logger', () => ({ logger }));
jest.mock('../index', () => ({ setup }));

import { readConfig, writeConfig } from '../config';

describe('config', () => {
  beforeEach(() => {
    readFile.mockClear();
    renderTemplate.mockClear();
    logger.mockClear();
    setup.mockClear();
  });

  it('has the following functions', () => {
    expect(typeof readConfig).toBe('function');
    expect(typeof writeConfig).toBe('function');
  });

  describe('readConfig', () => {
    it('returns a JSON object', () => {
      const config = readConfig('test.txt');
      expect(config).toEqual(mockResponse);
    });
  });

  describe('writeConfig', () => {
    it('calls the logger ## times', async () => {
      await writeConfig();
      expect(logger).toHaveBeenCalledTimes(2);
    });

    it('calls the logger ## times', async () => {
      await writeConfig(true);
      expect(logger).toHaveBeenCalledTimes(2);
    });

    it('should return the config data', async () => {
      const data = await writeConfig();
      expect(data).toEqual(mockResponse);
    });
  });
});
