// Internal
import { QUESTIONS } from '../setup';

describe('QUESTIONS', () => {
  it('should have two questions', () => {
    expect(QUESTIONS).toHaveLength(2);
  });
});
