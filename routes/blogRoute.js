const router = require('express').Router();
const {
  createBlog,
  updateBlog,
  getABlog,
  getAllBlogs,
  deleteBlog,
  likeTheBlog,
  dislikeTheBlog,
} = require('../controller/blogCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, isAdmin, createBlog);
router.put('/likes', authMiddleware, likeTheBlog);
router.put('/dislikes', authMiddleware, dislikeTheBlog);
router.put('/:id', authMiddleware, isAdmin, updateBlog);
router.delete('/:id', authMiddleware, isAdmin, deleteBlog);
router.get('/:id', getABlog);
router.get('/', getAllBlogs);

module.exports = router;
