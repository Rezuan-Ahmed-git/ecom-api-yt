const router = require('express').Router();
const {
  createBlog,
  updateBlog,
  getABlog,
  getAllBlogs,
  deleteBlog,
  likeTheBlog,
  dislikeTheBlog,
  uploadImages,
} = require('../controller/blogCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { uploadPhoto, blogImgResize } = require('../middlewares/uploadImages');

router.post('/', authMiddleware, isAdmin, createBlog);

router.put(
  '/upload/:id',
  authMiddleware,
  isAdmin,
  uploadPhoto.array('images', 10),
  blogImgResize,
  uploadImages
);

router.put('/likes', authMiddleware, likeTheBlog);
router.put('/dislikes', authMiddleware, dislikeTheBlog);
router.put('/:id', authMiddleware, isAdmin, updateBlog);
router.delete('/:id', authMiddleware, isAdmin, deleteBlog);
router.get('/:id', getABlog);
router.get('/', getAllBlogs);

module.exports = router;
