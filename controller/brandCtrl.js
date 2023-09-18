const Brand = require('../models/brandModel');
const asyncHandler = require('express-async-handler');

//create Brand
const createBrand = asyncHandler(async (req, res) => {
  try {
    const newBrand = await Brand.create(req.body);
    res.json(newBrand);
  } catch (error) {
    throw new Error(error);
  }
});

//update Brand
const updateBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updateBrand = await Brand.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateBrand);
  } catch (error) {
    throw new Error(error);
  }
});

//delete Brand
const deleteBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleteBrand = await Brand.findByIdAndDelete(id);
    res.json(deleteBrand);
  } catch (error) {
    throw new Error(error);
  }
});

//get a Brand
const getABrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getABrand = await Brand.findById(id);
    res.json(getABrand);
  } catch (error) {
    throw new Error(error);
  }
});

//get all Brands
const getAllBrands = asyncHandler(async (req, res) => {
  try {
    const getAllBrands = await Brand.find();
    res.json(getAllBrands);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createBrand,
  updateBrand,
  deleteBrand,
  getABrand,
  getAllBrands,
};
