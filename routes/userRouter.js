const express = require('express');
const router = express.Router()

const { validateUser } = require('../middleware/middlewares.util')
const {completePayment} = require('../controller/user.controller')

router.route('/completepayment').post(validateUser,completePayment)

module.exports = router