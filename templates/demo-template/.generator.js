// Validation helper
var Validation = require('../../dist/utils/validation').Validation;

/**
 * All we have to do is export some questions here. We can grab
 * any additional information we need and we can bolt it into each
 * template folder as optionally
 */
var questions = [
  {
    message: 'Collect additional information per "template".',
    name: 'customVar',
    type: 'input',
    validate: Validation.required
  }
];

module.exports = questions;
