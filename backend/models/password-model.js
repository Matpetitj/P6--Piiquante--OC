const mongoose = require('mongoose');
const validatorPackage = require('../middleware/email-verification-middleware');
const passwordValidator = require('../services/validator');

const passwordSchema = mongoose.Schema({
    password:{
        type: String, 
        required: true, 
        validator: passwordValidator.isValidPassword,
        message: 'Mot de passe incorrect',
        minlength:10
      }
})

module.exports = passwordSchema;