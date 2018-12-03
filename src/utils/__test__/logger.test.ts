// Internal
import { logger } from '../logger';

describe('logger', () => {
  const log = jest.fn();
  let ogWindow: any;

  beforeAll(() => {
    ogWindow = window;

    if (window.console) {
      window.console.log = log;
    }
  });

  afterAll(() => {
    window = ogWindow;
  });

  it('call the windows console method', () => {
    logger('Message');

    expect(log).toHaveBeenCalled();
  });
});
