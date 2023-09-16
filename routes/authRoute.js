const router = require('express').Router();
const {
  createUser,
  loginUserCtrl,
  getAllUsers,
  getAUser,
} = require('../controller/userCtrl');

//auth routes
router.post('/register', createUser);
router.post('/login', loginUserCtrl);

router.get('/all-users', getAllUsers);
router.get('/:id', getAUser);

module.exports = router;
