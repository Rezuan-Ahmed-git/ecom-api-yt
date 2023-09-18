const {
  createProduct,
  getAProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  addToWishlist,
} = require('../controller/productCtrl');
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');

const router = require('express').Router();

router.post('/', authMiddleware, isAdmin, createProduct);
router.get('/:id', getAProduct);
router.put('/wishlist', authMiddleware, addToWishlist);
router.put('/:id', authMiddleware, isAdmin, updateProduct);
router.delete('/:id', authMiddleware, isAdmin, deleteProduct);

router.get('/', getAllProducts);

module.exports = router;
