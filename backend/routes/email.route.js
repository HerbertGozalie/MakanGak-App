import express from "express";
import { email } from "../controllers/email.controller.js";

const router = express.Router();

router.post("/email", email);

export default router;

