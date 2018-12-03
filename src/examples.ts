#!/usr/bin/env/ node

// Vendor
import ejs from 'ejs';
import fs from 'fs';
import inquirer from 'inquirer';

// Internal
// import { se } from './setup';
import { writeFile } from './utils/files';
import { PATH_CURRENT, PATH_PACKAGE } from './utils/config';

const createDirectoryContents = (
  pathTemplate: string,
  pathDestination: string
) => {
  const filesToCreate = fs.readdirSync(pathTemplate);
  filesToCreate.forEach((file: string) => {
    const origFilePath = `${pathTemplate}/${file}`;

    // get stats about the current file
    const stats = fs.statSync(origFilePath);
    const data = {
      value: 'asdfasdfasdfasdf'
    };

    if (stats.isFile()) {
      const writePath = `${PATH_CURRENT}/${pathDestination}/${file}`;
      ejs.renderFile(origFilePath, data, writeFile(writePath));
    }
  });
};

// inquirer.prompt(prompts).then((answers: any) => {
//   const projectChoice = answers['project-choice'];
//   const projectName = answers['project-name'];
//   const pathTemplate = `${PATH_PACKAGE}/templates/${projectChoice}`;

//   fs.mkdirSync(`${PATH_CURRENT}/${projectName}`);

//   createDirectoryContents(pathTemplate, projectName);
// });
