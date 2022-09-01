const{Router} = require('express');
const router = Router();
const {homeController, updateHome} = require('../controllers/homeController');

router.get('/', homeController);
router.post('/', updateHome);

module.exports = router;