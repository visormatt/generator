// Validation helper
var Validation = require('../../dist/utils/validation').Validation;

/**
 * All we have to do is export some questions here. We can grab
 * any additional information we need and we can bolt it into each
 * template folder as optionally
 */
var questions = [
  {
    message: 'First we need to give it a name.',
    name: 'name',
    type: 'input',
    validate: Validation.required
  },
  {
    choices: ['typescript', 'javascript'],
    message: 'What language would you like to use?',
    name: 'language',
    type: 'list'
  }
];

module.exports = questions;
