const router = require('express').Router()
const payment = require('../controllers/payment')
const authentication = require('../middlewares/passport-http-bearer').authentication

router.use(authentication)
router.get('/payments', payment.getAllPayment)
router.get('/payment/:id', payment.getOnePayment)
router.post('/create/:id', payment.createPayment)
router.put('/update/:id', payment.updatePayment)
router.delete('/delete/:id', payment.deletePayment)

module.exports = router