const express = require('express')
const router = express.Router()

const { signUpPost, loginPost, forgotPost } = require('../controller/auth.controller')

router.route('/signup').post(signUpPost)
router.route('/signin').post(loginPost)
router.route('/forgot-password').post(forgotPost)

module.exports = router 