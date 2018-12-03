jest.mock('fs');

// Internal
import { readConfig, writeConfig } from '../config';

describe('config', () => {
  it('has the following functions', () => {
    expect(typeof readConfig).toBe('function');
    expect(typeof writeConfig).toBe('function');
  });

  // describe('readConfig', () => {
  //   it('throws when file does not exist', () => {
  //     expect(readConfig.bind(null, 'test.txt')).toThrow();
  //   });
  // });
});
