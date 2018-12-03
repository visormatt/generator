// Vendor
import ejs from 'ejs';
import fs from 'fs';

const checkFile = (path: string) => {
  const stats = fs.statSync(path);
  const isFile = stats.isFile();

  return isFile;
};

const readFile = (path: string) => {
  return fs.readFileSync(path, 'utf8');
};

const renderTemplate = (template: string, destination: string, data: any) => {
  ejs.renderFile(template, data, writeFile(destination));
};

const writeFile = (path: string) => (error: any, payload: any) => {
  if (error) throw new Error(error);

  fs.writeFileSync(path, payload, 'utf8');
};

export { checkFile, readFile, renderTemplate, writeFile };
