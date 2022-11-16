const passwordSchema = require('../models/password-model');
const validator = require('../services/validator');

module.exports = (req, res, next) => {
    validator.isValidPassword(req.body.password) ? next() : res.status(400).json({ message: 'Mot de passe incorrect' });
    // if (!passwordSchema.validate(req.body.password)) {
    //     res.status(400).json({ message: 'Le mot de passe doit faire au moins 10 caractères, une majuscule et un caractère spécial.' });
    // } else {
    //     next();
    // }
};

