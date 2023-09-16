const {
  createProduct,
  getAProduct,
  getAllProducts,
} = require('../controller/productCtrl');

const router = require('express').Router();

router.post('/', createProduct);
router.get('/:id', getAProduct);
router.get('/', getAllProducts);

module.exports = router;
