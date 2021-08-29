const router = require('express').Router()
const payment = require('../controllers/payment')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/list', payment.getAllPayment)
router.get('/detail/:id', payment.getOnePayment)
router.post('/create', payment.createPayment)
router.put('/update/:id', payment.updatePayment)
router.delete('/delete/:id', payment.deletePayment)

module.exports = router