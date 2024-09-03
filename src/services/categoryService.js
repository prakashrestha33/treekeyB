import Category from "../models/Category.js";

const getAllCategories = async (query) => {
  const limit = query.limit;
  const sort = query?.sort ? JSON.parse(query.sort) : {};
  const filters = query?.filters ? JSON.parse(query.filters) : {};

  return await Category.find(filters).limit(limit).sort(sort);
};

const getCategoryById = async (id) => {
  return await Category.findById(id);
};

const createCategory = async (data) => {
  return await Category.create(data);
};

const updateCategory = async (id, data) => {
  return await Category.findByIdAndUpdate(id, data);
};

const deleteCategory = async (id) => {
  return await Category.findByIdAndDelete(id);
};

export default {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
