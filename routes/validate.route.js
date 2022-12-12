const express = require('express')
const router = express.Router()

const { validateUser, generateOTP } = require('../controller/validate.controller')

router.route('/user/validate').get(validateUser).post(generateOTP)

module.exports = router 