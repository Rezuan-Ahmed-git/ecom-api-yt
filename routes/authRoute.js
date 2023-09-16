const router = require('express').Router();
const {
  createUser,
  loginUserCtrl,
  getAllUsers,
  getAUser,
  deleteAUser,
  updateAUser,
  blockUser,
  unblockUser,
} = require('../controller/userCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');

//auth routes
router.post('/register', createUser);
router.post('/login', loginUserCtrl);

router.get('/all-users', getAllUsers);
router.get('/:id', authMiddleware, isAdmin, getAUser);
router.put('/edit-user', authMiddleware, updateAUser);
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser);
router.delete('/:id', deleteAUser);

module.exports = router;
