const validator = require('../services/validator');

module.exports = (req, res, next) => {
    validator.isValidEmail(req.body.email) ? next() : res.status(400).json({ message: 'Adress email non valide' });
  };