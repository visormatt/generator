// Vendor
const camelCase = require('lodash/camelCase');
const upperFirst = require('lodash/upperFirst');

// Internal
var Validation = require('../../dist/utils/validation').Validation;

/**
 * All we have to do is export some questions here. We can grab
 * any additional information we need and we can bolt it into each
 * template folder as optionally
 */
var questions = (opts) => {
  const { name } = opts;
  const suggestedName = upperFirst(camelCase(name));
  // console.log('We can collect custom information per template', opts);

  return [
    {
      default: suggestedName,
      message: 'Component Name:',
      name: 'customName',
      type: 'input',
      validate: Validation.required
    },
    {
      message: 'Brief Description:',
      name: 'customDescription',
      type: 'input',
      validate: Validation.required
    }
  ];
};

module.exports = questions;
