const router = require('express').Router()
const user = require('./user')
const product = require('./product')
const order = require('./order')
const payment = require('./payment')

console.log("masuk sini")

router.use('/user', user)
router.use('/product', product)
router.use('/order', order)
router.use('/payment', payment)

module.exports = router