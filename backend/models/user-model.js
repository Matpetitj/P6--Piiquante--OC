const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const validator = require('../services/validator');

const userSchema = mongoose.Schema({
  email: { type: String,unique: true, 
    required: [true, 'Adresse email obligatoire'], validate: {
    validator: validator.isValidEmail, 
    message: 'Adresse mail incorrecte',
  }}, //validate https://mongoosejs.com/docs/validation.html#custom-validators pour mettre la vérification ici
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);