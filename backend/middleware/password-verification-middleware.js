const passwordSchema = require('../models/password-model');

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.status(400).json({ message: 'Le mot de passe doit faire au moins 10 caractères, une majuscule et un caractère spécial.' });
    } else {
        next();
    }
};

