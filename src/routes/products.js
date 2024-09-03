import express from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/productController.js";

const router = express.Router();

/**
 * GET
 * /api/products
 * Get all products
 */
router.get("/", getAllProducts);

/**
 * GET
 * /api/products/:id
 * Get product by id
 */
router.get("/:id", getProductById);

/**
 * POST
 * /api/products
 * Add a product
 */
router.post("/", addProduct);

/**
 * PUT
 * /api/products/:id
 * Update product
 */
router.put("/:id", updateProduct);

/**
 * DELETE
 * /api/products/:id
 * Delete a product
 */
router.delete("/:id", deleteProduct);

export default router;
