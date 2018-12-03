// Internal
import { readConfig, writeConfig } from '../config';

describe('config', () => {
  describe('has the following functions', () => {
    it('should be a function', () => {
      expect(typeof readConfig).toBe('function');
      expect(typeof writeConfig).toBe('function');
    });
  });

  // describe('readConfig', () => {
  //   it('should...', () => {
  //     expect(typeof checkForSettings).toBe('function');
  //   });
  // });
});
