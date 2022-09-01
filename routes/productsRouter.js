const{Router} = require('express');
const router = Router();
const {homeProducts, updateProduct, deleteProduct} = require('../controllers/productsController');

router.get('/', homeProducts);
router.post('/products', updateProduct);
router.post('/delete', deleteProduct);

module.exports = router;
