const {
  createProduct,
  getAProduct,
  getAllProducts,
  updateProduct,
} = require('../controller/productCtrl');

const router = require('express').Router();

router.post('/', createProduct);

router.get('/:id', getAProduct);
router.put('/:id', updateProduct);

router.get('/', getAllProducts);

module.exports = router;
