const validator = {
    isValidEmail: function(email) {
        let emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        let isRegexTrue = emailRegexp.test(email)
        return isRegexTrue;
    }
}

module.exports = validator;