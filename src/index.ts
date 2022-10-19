#!/usr/bin/env node

import { checkForSettings } from './setup/helper';
import { generator } from './generator';
// import { Generator as GeneratorClass } from './Class';

/**
 * @name init
 * @description Ensures the generator is setup to run and then
 * it kicks things off prompting the user to go with one of the
 * available template folders
 */
const init = async () => {
  const config = await checkForSettings();

  // return new GeneratorClass({
  //   debug: true,
  //   ...config
  // });

  await generator(config);
};

init();
