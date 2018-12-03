// Internal
import {
  createQuestions,
  createDirectoryContents,
  generator
} from '../generator';

// These will be hoisted
jest.mock('fs');

describe('generator', () => {
  it('should export the following functions', () => {
    expect(typeof createQuestions).toBe('function');
    expect(typeof createDirectoryContents).toBe('function');
    expect(typeof generator).toBe('function');
  });

  describe('createQuestions', () => {
    it('should return 2 questions', () => {
      expect(createQuestions({})).toHaveLength(2);
    });
  });
});
