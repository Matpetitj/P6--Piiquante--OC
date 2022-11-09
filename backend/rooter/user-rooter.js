const express = require("express");
const router = express.Router()

const userCtrl = require("../controllers/user-controller");
const checkPassword = require("../middleware/password-verification-middleware")
const checkEmail = require("../middleware/email-verification-middleware")

router.post("/signup", checkEmail, checkPassword, userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;