import categoryService from "../services/categoryService.js";

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories(req.query);

    res.json(categories);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getCategoryById = async (req, res) => {
  const id = req.params.id;

  try {
    const category = await categoryService.getCategoryById(id);

    if (!category) return res.status(404).send("category not found!");

    res.json(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addCategory = async (req, res) => {
  const data = req.body;

  if (!data.name) return res.status(422).send("Category name is required.");

  try {
    const createdCategory = await categoryService.createCategory(data);

    res.status(201).json(createdCategory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateCategory = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const category = await categoryService.getCategoryById(id);

    if (!category) return res.status(404).send("category not found!");

    const updatedCategory = await categoryService.updateCategory(id, data);

    res.json(updatedCategory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteCategory = async (req, res) => {
  const id = req.params.id;

  try {
    const category = await categoryService.getCategoryById(id);

    if (!category) return res.status(404).send("category not found!");

    await categoryService.deleteCategory(id);

    res.send(`category with id ${id} deleted successfully`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export {
  getAllCategories,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
};
