const prompt = jest.fn();

import { setup } from '../index';

// We just need to know these are triggered
jest.mock('inquirer', () => ({ prompt }));

describe('setup', () => {
  it('should export a "setup" function', () => {
    expect(typeof setup).toBe('function');
  });

  it('"setup" function should call "inquirer.prompt"', () => {
    setup();
    expect(prompt).toHaveBeenCalled();
  });
});
