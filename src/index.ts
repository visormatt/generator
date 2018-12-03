#!/usr/bin/env node

// https://goo.gl/C6nSYV
import '@babel/polyfill';

// Internal
import { checkForSettings } from './setup/helper';
import { generator } from './generator';

/**
 * @name init
 * @description Ensures the generator is setup to run
 */
const init = async () => {
  const config = await checkForSettings();
  await generator(config);
};

/**
 * And here we go
 */
init();
