const router = require('express').Router()
const product = require('../controllers/product')
const authentication = require('../middlewares/passport-http-bearer').authentication

router.use(authentication)
router.get('/products', product.getAllProduct)
router.get('/product/:id', product.getOneProduct)
router.post('/create/:id', product.createProduct)
router.put('/update/:id', product.updateProduct)
router.delete('/delete/:id', product.deleteProduct)

module.exports = router