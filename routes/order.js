const router = require('express').Router()
const order = require('../controllers/order')
const authentication = require('../middlewares/passport-http-bearer').authentication

router.use(authentication)
router.get('/orders', order.getAllorder)
router.get('/order/:id', order.getOneorder)
router.post('/create/:id', order.createorder)
router.put('/update/:id', order.updateorder)
router.delete('/delete/:id', order.deleteorder)

module.exports = router