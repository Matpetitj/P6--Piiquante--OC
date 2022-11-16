module.exports = {
    isValidEmail: function(email) {
        let emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        let isRegexTrue = emailRegexp.test(email)
        return isRegexTrue;
    },

    isValidPassword: function(password) {
        let passwordRegexp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$/
        let isRegexTrue = passwordRegexp.test(password)
        return isRegexTrue;
    }
}