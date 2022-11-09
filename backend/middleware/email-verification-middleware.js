const validator = require('../services/validator');

module.exports = (req, res, next) => {
    validator.isValidEmail(req.body.email) ? next() : res.status(400).json({ message: 'Adress email non valide' });
  };

// const email = {
//     validEmail: function(email) {
//         let emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
//         let isRegexTrue = emailRegexp.test(email)
//         return isRegexTrue;
//     }
// }

// module.exports = email;