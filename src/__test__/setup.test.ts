const writeConfig = jest.fn();

// We just need to know these are triggered
jest.mock('../setup/config', () => ({ writeConfig }));

describe('setup', () => {
  require('../setup');

  it('should call "writeConfig"', () => {
    expect(writeConfig).toHaveBeenCalledWith(false);
  });
});
