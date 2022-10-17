const prompt = jest.fn();
const Separator = jest.fn();

// We just need to know these are triggered
jest.mock('inquirer', () => ({ prompt, Separator }));

import { checkbox } from '../checkbox';
import { confirm } from '../confirm';
import { input } from '../input';
import { list } from '../list';
import { password } from '../password';

describe('Examples', () => {
  it('should export some examples', () => {
    expect(typeof checkbox).toBe('function');
    expect(typeof confirm).toBe('function');
    expect(typeof input).toBe('function');
    expect(typeof list).toBe('function');
    expect(typeof password).toBe('function');
  });

  const examples = [checkbox, confirm, input, list, password];
  const testExample = (example: () => void) => {
    it('each example should trigger "inquirer.prompt"', () => {
      prompt.mockClear();
      example();
      expect(prompt).toHaveBeenCalled();
    });
  };

  examples.map(testExample);
});
