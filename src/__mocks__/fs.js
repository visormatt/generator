const path = require('path');

const fs = jest.genMockFromModule('fs');

const existsSync = () => {
  console.log('----> testing existsSyn');
  return true;
};

const readFileSync = (path) => {
  console.log('----> testing readFileSyn', path);
  return true;
};

const writeFileSync = (path) => {
  console.log('----> testing writeFileSyn', path);
  return true;
};

module.exports = {
  ...fs,
  existsSync,
  readFileSync,
  writeFileSync
};
