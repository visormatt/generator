// Internal
import { prompts } from '../prompts';

describe('prompts', () => {
  it('should have two prompts', () => {
    expect(prompts).toHaveLength(1);
  });
});
