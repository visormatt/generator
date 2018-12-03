/**
 * @name logger
 * @description Easier to test when its all piped through one method
 */
const logger = (...args: any[any]) => {
  console.log(...args);
};

export { logger };
