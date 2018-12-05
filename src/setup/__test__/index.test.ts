const prompt = jest.fn();

// We just need to know these are triggered
jest.mock('inquirer', () => ({ prompt }));

// Internal
import { setup } from '../index';

describe('setup', () => {
  it('should export a "setup" function', () => {
    expect(typeof setup).toBe('function');
  });

  it('"setup" function should call "inquirer.prompt"', () => {
    setup();
    expect(prompt).toHaveBeenCalled();
  });
});
