// Vendor
import ejs from 'ejs';
import fs from 'fs';

/**
 * @name checkFile
 * @description We just want to know if a file exists
 */
const checkFile = (path: string) => {
  return fs.existsSync(path);
};

/**
 * @name readFile
 * @description Synchronous read of a file
 */
const readFile = (path: string) => {
  return fs.readFileSync(path, 'utf8');
};

/**
 * @name renderTemplate
 * @description This is where we process the templates, replacing
 * and injecting our data
 */
const renderTemplate = (template: string, destination: string, data: any) => {
  ejs.renderFile(template, data, writeFile(destination));
};

/**
 * @name writeFile
 * @description Synchronous write of a file
 */
const writeFile = (path: string) => (error: any, payload: any) => {
  if (error) throw new Error(error);

  fs.writeFileSync(path, payload, 'utf8');
};

export { checkFile, readFile, renderTemplate, writeFile };
