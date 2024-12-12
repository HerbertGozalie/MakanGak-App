import Account from "../models/account.model.js";
import jwt from "jsonwebtoken";

const sendError = (res, status, message) =>
  res.status(status).json({ error: message });

export const register = async (req, res) => {
  const { fullname, email, username, password } = req.body;
  if (!fullname || !email || !username || !password) {
    return sendError(res, 400, "All fields are required");
  }

  try {
    const existingAccount = await Account.findOne({ email });
    if (existingAccount) {
      return res.status(409).json({ error: "Email already registered" });
    }

    const newAccount = new Account({ fullname, email, username, password });
    await newAccount.save();
    res.status(201).json({ message: "Account registered successfully" });
  } catch (error) {
    sendError(res, 500, "Database error");
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return sendError(res, 400, "Username and password are required");
  }

  try {
    // Find the user with the provided username and password
    const user = await Account.findOne({ username, password });
    if (!user) {
      return res
        .status(401)
        .json({ loginStatus: false, error: "Invalid username or password" });
    }

    // Create JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // Set the token as a secure cookie
    res.cookie("token", token, { httpOnly: true, secure: true });
    res.json({ loginStatus: true, token });
  } catch (error) {
    sendError(res, 500, "Database error");
  }
};

export const seeProfile = async (req, res) => {
  try {
    console.log("Fetching profile for user ID:", req.user._id);
    const user = await Account.findById(req.user._id).select("-password");
    if (!user) {
      console.error("User not found");
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error in seeProfile:", error.message);
    res.status(500).json({ error: "Database error" });
  }
};

export const profileUpdate = async (req, res) => {
  const { fullname, email, username } = req.body;

  if (!fullname || !email || !username) {
    return sendError(res, 400, "All fields are required");
  }

  try {
    const updatedUser = await Account.findByIdAndUpdate(
      req.user._id, // The ID of the user obtained from the token
      { fullname, email, username }, // The fields to update
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return sendError(res, 404, "User not found");
    }

    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error(error);
    sendError(res, 500, "Database error");
  }
};

export const logout = (req, res) => {
  res.clearCookie("token"); // Clear the authentication token from the cookies
  res.json({ message: "Logout successful" });
};
