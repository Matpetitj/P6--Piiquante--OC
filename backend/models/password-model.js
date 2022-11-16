// const passwordValidator = require('password-validator');

// const passwordSchema = new passwordValidator();

// passwordSchema
// .is().min(8)                                    
// .is().max(64)                                  
// .has().uppercase()                              
// .has().lowercase()                             
// .has().digits()                                
// .has().not().spaces()                    

// module.exports = passwordSchema;

const mongoose = require('mongoose');
const validatorPackage = require('../middleware/email-verification-middleware');
const passwordValidator = require('../services/validator');

const passwordSchema = mongoose.Schema({
    password:{
        type: String, 
        required: true, 
        // match:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/, 
        validator: passwordValidator.isValidPassword,
        message: 'Mot de passe incorrect',
        minlength:10
      }
})

module.exports = passwordSchema;