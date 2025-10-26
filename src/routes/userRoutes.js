// src/routes/userRoutes.js
import express from "express";
import { registerUser, loginUser, getUserProfile } from "../controllers/userController.js";
import { authenticate } from "../middleware/authMiddleware.js"; // ✅ named import

const router = express.Router();

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected route
router.get("/profile", authenticate, getUserProfile);

export default router;