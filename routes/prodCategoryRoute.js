const router = require('express').Router();
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getACategory,
} = require('../controller/prodCategoryCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, isAdmin, createCategory);
router.put('/:id', authMiddleware, isAdmin, updateCategory);
router.delete('/:id', authMiddleware, isAdmin, deleteCategory);
router.get('/:id', getACategory);

module.exports = router;
