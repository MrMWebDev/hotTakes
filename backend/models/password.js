const passwordValidator = require('password-validator'); //

const passwordSchema = new passwordValidator();

// password pattern
passwordSchema
.is().min(8)                                                    // Minimun length: 8
.is().max(30)                                                   // Maximum length: 30
.has().uppercase()                                              // Must have at least one capital letter
.has().lowercase()                                              // Must have at least a lowercase
.has().digits()                                                 // Must have at least one digit
.has().not().spaces()                                           // Must not have spaces
.is().not().oneOf(["=", "'", "\"", "SELECT", "*", "accounts"]); // Prohibited characters or formulas 

module.exports = passwordSchema;