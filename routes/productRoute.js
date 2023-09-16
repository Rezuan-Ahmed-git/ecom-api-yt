const { createProduct } = require('../controller/productCtrl');

const router = require('express').Router();

router.post('/', createProduct);

module.exports = router;
