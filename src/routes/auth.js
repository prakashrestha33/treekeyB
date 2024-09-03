import express from "express";
import { login, register } from "../controllers/authController.js";

const router = express.Router();

/**
 * POST
 * /api/auth/register
 * Register user
 */
router.post("/register", register);

router.post("/login", login);

export default router;
