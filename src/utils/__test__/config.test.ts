// Internal
import { PATH_PACKAGE, PATH_CURRENT } from '../config';

describe('files', () => {
  it('should export the following:', () => {
    expect(PATH_PACKAGE).toBeTruthy();
    expect(PATH_CURRENT).toBeTruthy();
  });
});
