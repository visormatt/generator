const checkForSettings = jest.fn();
const generator = jest.fn();

// We just need to know these are triggered
jest.mock('../setup/helper', () => ({ checkForSettings }));
jest.mock('../generator', () => ({ generator }));

describe('index', () => {
  require('../index');

  it('should call "checkForSettings" & "generator"', () => {
    expect(checkForSettings).toHaveBeenCalled();
    expect(generator).toHaveBeenCalled();
  });
});
