import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import accountRoutes from "./routes/account.route.js";
import emailRoutes from "./routes/email.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8081;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Database connection
connectDB(); // This connects to MongoDB

// Routes
app.use("/api/accounts", accountRoutes);
app.use("/api/emails", emailRoutes);

// Start server
app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
});
