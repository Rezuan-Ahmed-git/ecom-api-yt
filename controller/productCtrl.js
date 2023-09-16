const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

//create product
const createProduct = asyncHandler(async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { createProduct };
