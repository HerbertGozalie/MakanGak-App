const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "makangak",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
  } else {
    console.log("Connected to database.");
  }
});

// Utility functions
const sendError = (res, status, message) => res.status(status).json({ error: message });

// Routes
app.post("/email", (req, res) => {
  const { email } = req.body;
  if (!email) return sendError(res, 400, "Email is required");

  const checkEmailSql = "SELECT * FROM email WHERE email = ?";
  const insertEmailSql = "INSERT INTO email (email) VALUES (?)";

  db.query(checkEmailSql, [email], (err, result) => {
    if (err) return sendError(res, 500, "Database error");
    if (result.length > 0) {
      return res.status(409).json({ error: "Email already subscribed" });
    }
    db.query(insertEmailSql, [email], (err) => {
      if (err) return sendError(res, 500, "Database error");
      res.status(201).json({ message: "Email subscribed successfully" });
    });
  });
});

app.post("/register", (req, res) => {
  const { fullname, email, username, password } = req.body;
  if (!fullname || !email || !username || !password) {
    return sendError(res, 400, "All fields are required");
  }

  const checkEmailSql = "SELECT * FROM account WHERE email = ?";
  const insertAccountSql = "INSERT INTO account (fullname, email, username, password) VALUES (?)";

  db.query(checkEmailSql, [email], (err, result) => {
    if (err) return sendError(res, 500, "Database error");
    if (result.length > 0) {
      return res.status(409).json({ error: "Email already registered" });
    }
    db.query(insertAccountSql, [[fullname, email, username, password]], (err) => {
      if (err) return sendError(res, 500, "Database error");
      res.status(201).json({ message: "Account registered successfully" });
    });
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return sendError(res, 400, "Username and password are required");
  }

  const sql = "SELECT * FROM account WHERE username = ? AND password = ?";

  db.query(sql, [username, password], (err, result) => {
    if (err) return sendError(res, 500, "Database error");
    if (result.length === 0) {
      return res.status(401).json({ loginStatus: false, error: "Invalid username or password" });
    }
    const token = jwt.sign({ userId: result[0].id }, "jwt_secret_key", { expiresIn: "1d" });
    res.cookie("token", token, { httpOnly: true, secure: true });
    res.json({ loginStatus: true, token });
  });
});

app.get("/profile", authenticateToken, (req, res) => {
  const sql = "SELECT * FROM account WHERE id = ?";
  db.query(sql, [req.user.userId], (err, result) => {
    if (err) return sendError(res, 500, "Database error");
    if (result.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(result[0]);
  });
});

app.put("/update-user", authenticateToken, (req, res) => {
  const { fullname, email, username } = req.body;
  if (!fullname || !email || !username) {
    return sendError(res, 400, "All fields are required");
  }

  const sql = "UPDATE account SET fullname = ?, email = ?, username = ? WHERE id = ?";
  db.query(sql, [fullname, email, username, req.user.userId], (err) => {
    if (err) return sendError(res, 500, "Database error");
    res.json({ message: "User updated successfully" });
  });
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logout successful" });
});

// Authentication Middleware
function authenticateToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) return sendError(res, 401, "Authentication token missing");

  jwt.verify(token, "jwt_secret_key", (err, user) => {
    if (err) return sendError(res, 403, "Invalid authentication token");
    req.user = user;
    next();
  });
}

// Start server
const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});