import { resolve } from 'path';

/**
 * Any application configuration we'd like to use
 */
export const FILE_CONFIG = '.generator.config';
export const FILE_CUSTOMIZE = '.generator.js';
export const PATH_CURRENT = process.cwd();
export const PATH_PACKAGE = resolve(__dirname, '../../');
