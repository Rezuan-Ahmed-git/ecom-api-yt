const router = require('express').Router();
const {
  createUser,
  loginUserCtrl,
  getAllUsers,
  getAUser,
  deleteAUser,
  updateAUser,
} = require('../controller/userCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');

//auth routes
router.post('/register', createUser);
router.post('/login', loginUserCtrl);

router.get('/all-users', getAllUsers);
router.get('/:id', authMiddleware, isAdmin, getAUser);
router.put('/edit-user', authMiddleware, updateAUser);
router.delete('/:id', deleteAUser);

module.exports = router;
