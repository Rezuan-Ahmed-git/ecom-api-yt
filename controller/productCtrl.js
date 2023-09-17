const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');
const slugify = require('slugify');

//create product
const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});

//update product
const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    title,
    brand,
    description,
    price,
    category,
    quantity,
    sold,
    images,
    color,
    ratings,
  } = req.body;
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const product = await Product.findById(id);
    if (!product) {
      throw new Error('Product not found');
    }
    const payload = {
      title,
      brand,
      description,
      price,
      category,
      quantity,
      sold,
      images,
      color,
      ratings,
    };

    Object.keys(payload).forEach((key) => {
      product[key] = payload[key] ?? product[key];
    });
    await product.save();

    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

//get a product
const getAProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const findProduct = await Product.findById(id);
    res.json(findProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllProducts = asyncHandler(async (req, res) => {
  try {
    const getAllProducts = await Product.find();
    res.json(getAllProducts);
  } catch (error) {
    throw new Error(error);
  }
});

// const getAllProducts = asyncHandler(async(req, res)=> {})

module.exports = { createProduct, getAProduct, getAllProducts, updateProduct };
