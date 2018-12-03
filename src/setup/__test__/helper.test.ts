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
    let fn;

    beforeEach(() => {
      fn = checkForSettings();
    });

    it('should be a function', () => {
      expect(typeof checkForSettings).toBe('function');
    });

    it('should call these methods', () => {
      expect(findUp).toHaveBeenCalledWith('.generator.config');
    });
  });
});
