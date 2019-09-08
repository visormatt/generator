#!/usr/bin/env node

// https://goo.gl/C6nSYV
import '@babel/polyfill';

// Internal
import { writeConfig } from './setup/config';

// Skip to it and kick off the step to write our configuration
writeConfig(false);
