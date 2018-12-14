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
 * @name createDirectory
 * @description Simple method that checks for and creates a folder
 * if it does not exist
 */
const createDirectory = (path: string) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, 0o744);
  }
};

/**
 * @name readFile
 * @description Synchronous read of a file
 */
const readFile = (path: string) => {
  return fs.readFileSync(path, 'utf8');
};

/**
 * @name rename
 * @description tbd...
 */
const rename = (name: string, data: any = {}) => {
  if (!name.startsWith('=')) return name;

  const key = name.substr(1);
  return data[key] ? data[key] : 'index';
};

/**
 * @name renameFile
 * @description Using an "=" prefix and the "key" of the value we'd like to
 * use for the new file name. This is most commonly the "name" we collect
 * as part of the default prompt of questions. But other values can be made
 * available as needed.
 */
const renameFile = (filename: string, data: any = {}) => {
  const parts = filename.split('.');
  const name = parts.shift();
  const ext = parts.join('.');

  if (!name) return filename;

  const newName = rename(name, data);

  return `${newName}.${ext}`;
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

export {
  checkFile,
  createDirectory,
  readFile,
  rename,
  renameFile,
  renderTemplate,
  writeFile
};
