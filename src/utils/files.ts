// Vendor
import fs from 'fs';

const writeFile = (path: string) => (error: any, payload: any) => {
  if (error) throw new Error(error);

  fs.writeFileSync(path, payload, 'utf8');
};

export { writeFile };
