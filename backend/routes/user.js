const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const checkpassword = require("../middleware/password-validator");
const checkEmail = require("../middleware/checkemail");

router.post('/signup', checkpassword, checkEmail, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;