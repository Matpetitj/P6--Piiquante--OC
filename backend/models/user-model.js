const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const validatorPackage = require('../middleware/email-verification-middleware');

const userSchema = mongoose.Schema({
  email: { type: String,unique: true, required: [true, 'Adresse email obligatoire'], validate: {
    validator: validatorPackage.validEmail, message: 'Votre mot de passe doit contenir au moins 10 caractères, avec au moins un chiffre et un caractère spécial',
  }}, //validate https://mongoosejs.com/docs/validation.html#custom-validators pour mettre la vérification ici
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);