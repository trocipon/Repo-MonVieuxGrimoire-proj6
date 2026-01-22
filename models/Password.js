const passwordValidator = require("password-validator");

const passwordSchema = new passwordValidator();

passwordSchema
  .is().min(8)                  // Minimum length 8
  .is().max(50)                 // Maximum length 50
  .has().uppercase()            // Must have uppercase letters
  .has().lowercase()            // Must have lowercase letters
  .has().digits()               // Must have at least 1 digit
  .has().symbols()              // Must have at least 1 symbol
  .has().not().spaces();        // Should not have spaces

module.exports = passwordSchema;
