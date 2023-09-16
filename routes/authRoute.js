const router = require('express').Router();
const { createUser } = require('../controller/userCtrl');

router.post('/register', createUser);

module.exports = router;
