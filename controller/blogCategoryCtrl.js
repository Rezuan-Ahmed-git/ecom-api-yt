const BCategory = require('../models/blogCategoryModel');
const asyncHandler = require('express-async-handler');

//create category
const createCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await BCategory.create(req.body);
    res.json(newCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//update category
const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updateCategory = await BCategory.findByIdAndUpdate(id, req.body, {
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
    const deleteCategory = await BCategory.findByIdAndDelete(id);
    res.json(deleteCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//get a category
const getACategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getACategory = await BCategory.findById(id);
    res.json(getACategory);
  } catch (error) {
    throw new Error(error);
  }
});

//get all categories
const getAllCategories = asyncHandler(async (req, res) => {
  try {
    const getAllCategories = await BCategory.find();
    res.json(getAllCategories);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getACategory,
  getAllCategories,
};
