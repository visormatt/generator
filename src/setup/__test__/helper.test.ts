const findUp = jest.fn();
const readConfig = jest.fn();
const writeConfig = jest.fn();

// We just need to know these are triggered
jest.mock('find-up', () => findUp);
jest.mock('../config', () => ({ readConfig, writeConfig }));

// Internal
import { checkForSettings } from '../helper';

describe('helper', () => {
  describe('checkForSettings', () => {
    beforeEach(() => {
      findUp.mockClear();
      readConfig.mockClear();
      writeConfig.mockClear();
    });

    it('should be a function', () => {
      expect(typeof checkForSettings).toBe('function');
    });

    it('should call these methods', () => {
      checkForSettings();
      expect(findUp).toHaveBeenCalledWith('.generator.config');
    });

    it('should call call "readConfig" when we have a config', async () => {
      findUp.mockImplementationOnce(() => true);
      await checkForSettings();

      expect(readConfig).toHaveBeenCalled();
      expect(writeConfig).not.toHaveBeenCalled();
    });

    it('should call call "writeConfig" otherwise', async () => {
      findUp.mockImplementationOnce(() => false);
      await checkForSettings();

      expect(readConfig).not.toHaveBeenCalled();
      expect(writeConfig).toHaveBeenCalled();
    });
  });
});
