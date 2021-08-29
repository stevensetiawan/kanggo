const router = require('express').Router()
const order = require('../controllers/order')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/list', order.getAllorder)
router.get('/detail/:id', order.getOneorder)
router.post('/create', order.createorder)
router.put('/update/:id', order.updateorder)
router.delete('/delete/:id', order.deleteorder)

module.exports = router