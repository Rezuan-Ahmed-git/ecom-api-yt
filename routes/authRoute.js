const router = require('express').Router();
const {
  createUser,
  loginUserCtrl,
  getAllUsers,
  getAUser,
  deleteAUser,
  updateAUser,
} = require('../controller/userCtrl');

//auth routes
router.post('/register', createUser);
router.post('/login', loginUserCtrl);

router.get('/all-users', getAllUsers);
router.get('/:id', getAUser);
router.put('/:id', updateAUser);
router.delete('/:id', deleteAUser);

module.exports = router;
