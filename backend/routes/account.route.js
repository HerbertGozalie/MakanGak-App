import express from "express";
import jwt from "jsonwebtoken";
import Account from "../models/account.model.js";

import {
  login,
  logout,
  profileUpdate,
  register,
  seeProfile,
} from "../controllers/account.controller.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/profile", authenticateToken, seeProfile);

router.put("/update-user", authenticateToken, profileUpdate);

router.get("/logout", logout);

function authenticateToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    console.error("No token found in cookies");
    return res.status(401).json({ error: "Authentication token missing" });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      console.error("JWT verification failed:", err.message);
      return res.status(403).json({ error: "Invalid authentication token" });
    }

    try {
      console.log("Decoded token:", decoded);
      const user = await Account.findById(decoded.userId);
      if (!user) {
        console.error("User not found in DB");
        return res.status(404).json({ error: "User not found" });
      }

      req.user = user;
      next();
    } catch (error) {
      console.error("Database error in authenticateToken:", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  });
}


export default router;
