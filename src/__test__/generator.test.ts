// Internal
import {
  createQuestions,
  createDirectoryContents,
  generator
} from '../generator';

describe('generator', () => {
  it('should export the following functions', () => {
    expect(typeof createQuestions).toBe('function');
    expect(typeof createDirectoryContents).toBe('function');
    expect(typeof generator).toBe('function');
  });

  // describe('createQuestions', () => {
  //   it('should....', () => {
  //     expect(typeof createQuestions).toBe('function');
  //   });
  // });
});
