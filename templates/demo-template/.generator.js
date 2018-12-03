// Validation helper
var Validation = require('../../dist/utils/validation').Validation;

/**
 * All we have to do is export some questions here. We can grab
 * any additional information we need and we can bolt it into each
 * template folder as optionally
 */
var questions = (config) => {
  console.log('----> config', config);

  return [
    {
      default: 'default custom variable',
      message: 'Collect additional information per "template".',
      name: 'customVar',
      type: 'input'
      // validate: Validation.required
    }
  ];
};

module.exports = questions;
