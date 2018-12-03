#!/usr/bin/env node

// https://goo.gl/C6nSYV
import '@babel/polyfill';

// Internal
import { checkForSettings } from './setup/helper';
import { setup } from './setup/index';

/**
 * @name init
 * @description Ensures the generator is setup to run
 */
const init = async () => {
  await checkForSettings();

  await setup();
};

/**
 * And here we go
 */
init();
