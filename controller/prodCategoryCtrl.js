const PCategory = require('../models/prodCategoryModel');
const asyncHandler = require('express-async-handler');

//create category
const createCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await PCategory.create(req.body);
    res.json(newCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//update category
const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updateCategory = await PCategory.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//delete category
const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleteCategory = await PCategory.findByIdAndDelete(id);
    res.json(deleteCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//get a category
const getACategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getACategory = await PCategory.findById(id);
    res.json(getACategory);
  } catch (error) {
    throw new Error(error);
  }
});

// const createCategory = asyncHandler(async (req, res) => {});
// const createCategory = asyncHandler(async (req, res) => {});

module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getACategory,
};
