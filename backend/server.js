require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "makangak",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database.");
});

app.post("/email", (req, res) => {
  const checkEmailSql = "SELECT * FROM email WHERE email = ?";
  const insertEmailSql = "INSERT INTO email (email) VALUES (?)";
  const email = req.body.email;

  // First, check if the email already exists
  db.query(checkEmailSql, [email], (err, result) => {
    if (err) {
      console.error("Error checking email:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (result.length > 0) {
      // Email already exists
      return res.status(409).json({ error: "Email already subscribed before" });
    }

    // Email does not exist, proceed to insert
    db.query(insertEmailSql, [email], (err, data) => {
      if (err) {
        console.error("Error inserting email:", err);
        return res.status(500).json({ error: "Database error" });
      }

      return res.status(201).json(data);
    });
  });
});

app.post("/register", (req, res) => {
  const checkEmailSql = "SELECT * FROM account WHERE email = ?";
  const insertAccountSql =
    "INSERT INTO account (fullname, email, username, password) VALUES (?)";
  const { fullname, email, username, password } = req.body;

  // First, check if the email already exists
  db.query(checkEmailSql, [email], (err, result) => {
    if (err) {
      console.error("Error checking email:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (result.length > 0) {
      // Email already exists
      return res.status(409).json({ error: "Email already registered" });
    }

    // Email does not exist, proceed to insert the new account
    const values = [fullname, email, username, password];
    db.query(insertAccountSql, [values], (err, data) => {
      if (err) {
        console.error("Error inserting account:", err);
        return res.status(500).json({ error: "Database error" });
      }

      return res
        .status(201)
        .json({ message: "Account registered successfully", data });
    });
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM account WHERE username = ? AND password = ?";
  db.query(sql, [req.body.username, req.body.password], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: "Query error" });
    if (result.length > 0) {
      const token = jwt.sign({ userId: result[0].id }, "jwt_secret_key", {
        expiresIn: "1d",
      });
      res.cookie("token", token, { httpOnly: true, secure: true });
      return res.json({ loginStatus: true, token });
    } else {
      return res.json({
        loginStatus: false,
        Error: "wrong username or password",
      });
    }
  });
});

app.get("/profile", authenticateToken, (req, res) => {
  const userId = req.user.userId;

  const sql = "SELECT * FROM account WHERE id = ?";
  db.query(sql, [userId], (err, result) => {
    if (err) {
      console.error("Error fetching profile data:", err.message);
      return res.status(500).json({ error: "Internal server error" });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    const profile = result[0];
    profile.image = `/uploads/${profile.image}`;
    res.json(profile);
  });
});

app.put("/update-user", authenticateToken, (req, res) => {
  const userId = req.user.userId;
  const { fullname, email, username } = req.body;

  if (!fullname || !email || !username) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const sql =
    "UPDATE account SET fullname = ?, email = ?, username = ? WHERE id = ?";
  const values = [fullname, email, username, userId];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error updating user data:", err.message);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json({ message: "User updated successfully" });
  });
});

function authenticateToken(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "Authentication token missing" });
  }

  jwt.verify(token, "jwt_secret_key", (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid authentication token" });
    }
    req.user = user;
    next();
  });
}

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
