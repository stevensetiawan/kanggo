const router = require('express').Router()
const product = require('../controllers/product')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/list', product.getAllProduct)
router.get('/detail/:id', product.getOneProduct)
router.post('/create', product.createProduct)
router.put('/update/:id', product.updateProduct)
router.delete('/delete/:id', product.deleteProduct)

module.exports = router