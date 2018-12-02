// Internal
import { PACKAGE_ROOT, PATH_CURRENT } from '../config';

describe('files', () => {
  it('should export the following:', () => {
    expect(PACKAGE_ROOT).toBeTruthy();
    expect(PATH_CURRENT).toBeTruthy();
  });
});
