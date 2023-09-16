const router = require('express').Router();
const { createUser, loginUserCtrl } = require('../controller/userCtrl');

router.post('/register', createUser);
router.post('/login', loginUserCtrl);

module.exports = router;
