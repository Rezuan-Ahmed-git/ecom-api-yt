const router = require('express').Router();
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getACategory,
  getAllCategories,
} = require('../controller/blogCategoryCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, isAdmin, createCategory);
router.put('/:id', authMiddleware, isAdmin, updateCategory);
router.delete('/:id', authMiddleware, isAdmin, deleteCategory);
router.get('/:id', getACategory);
router.get('/', getAllCategories);

module.exports = router;
