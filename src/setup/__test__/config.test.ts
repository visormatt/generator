const mockResponse = { test_key: 'test_value' };

const logger = jest.fn();

const readFile = jest.fn(() => {
  return JSON.stringify(mockResponse);
});

const renderTemplate = jest.fn(() => {
  console.log('---> RENDER TEMPLATE');
});

const setup = jest.fn(() => {
  console.log('---> MOCK SETUP RESPONSE');

  return {
    test_key: 'test_value'
  };
});

// We just need to know these are triggered
jest.mock('../../utils/files', () => ({ readFile, renderTemplate }));
jest.mock('../../utils/logger', () => ({ logger }));
jest.mock('../index', () => ({ setup }));

// Internal
import { readConfig, writeConfig } from '../config';

describe('config', () => {
  it('has the following functions', () => {
    expect(typeof readConfig).toBe('function');
    expect(typeof writeConfig).toBe('function');
  });

  describe('readConfig', () => {
    // Mocked response
    it('returns a JSON object', () => {
      const config = readConfig('test.txt');
      expect(config).toEqual(mockResponse);
    });
  });

  describe('writeConfig', () => {
    it('calls the logger ## times', () => {
      writeConfig();
      expect(logger).toHaveBeenCalledTimes(2);
    });

    it('should return the config data', async () => {
      const data = await writeConfig();
      expect(data).toEqual(mockResponse);
    });
  });
});
