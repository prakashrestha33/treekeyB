import express from "express";
import {
  addCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

/**
 * GET
 * /api/category
 * Get all category
 */
router.get("/", getAllCategories);

/**
 * GET
 * /api/category/:id
 * Get category by id
 */
router.get("/:id", getCategoryById);

/**
 * POST
 * /api/category
 * Add a category
 */
router.post("/", addCategory);

/**
 * PUT
 * /api/category/:id
 * Update category
 */
router.put("/:id", updateCategory);

/**
 * DELETE
 * /api/category/:id
 * Delete a category
 */
router.delete("/:id", deleteCategory);

export default router;
