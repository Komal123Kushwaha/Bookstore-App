import express from "express";
import { signup,login } from "../controller/user.controller.js"; // Ensure this path is correct

const router = express.Router();

// Route for user signup
router.post("/signup", signup);
router.post("/login",login);

export default router;
