import filePath from "../utils/filePath.js";
import {
  CHECK_EXISTING_USER,
  SAVE_USER,
  CHECK_EXISTING_USER_BY_ID,
} from "../db/user_db_queries.js";
import pool from "../utils/mysql.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const salt = bcrypt.genSaltSync(10);
export const user_login_controller = (req, res) => {
  res.sendFile(filePath("html", "login.html"));
};

export const user_signup_controller = (req, res) => {
  res.sendFile(filePath("html", "signup.html"));
};

export const user_dashboard_controller = (req, res) => {
  res.sendFile(filePath("html", "dashboard.html"));
};

export const user_register_controller = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username?.trim() || !email?.trim() || !password?.trim()) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const [rows] = await pool.query(CHECK_EXISTING_USER, [email]);
    if (rows.length > 0) {
      return res
        .status(400)
        .json({ error: "User already exist with this email." });
    }
    const hashPassword = bcrypt.hashSync(password, salt);
    const [results] = await pool.query(SAVE_USER, [
      username,
      email,
      hashPassword,
    ]);
    if (results?.affectedRows === 0) {
      return res.status(400).json({ error: "Error while creating user" });
    }
    res.status(200).sendFile(filePath("html", "login.html"));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: err.message });
  }
};

export const user_login_check_controller = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const [rows] = await pool.query(CHECK_EXISTING_USER, [email]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found", status: false });
    }

    const user = rows[0];

    const isPasswordMatch = bcrypt.compareSync(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Invalid password", status: false });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
    );

    return res
      .cookie("token", token, {
        httpOnly: false,
        secure: false,
        sameSite: "lax",
      })
      .status(200)
      .sendFile(filePath("html", "dashboard.html"));
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ message: "Server error", status: false });
  }
};

export const user_logout_controller = (req, res) => {
  // localStorage.clear();
  res.clearCookie("token");
  res.status(200).sendFile(filePath("html", "login.html"));
};

export const user_data_controller = async (req, res) => {
  const token = req.cookies.token;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const [rows] = await pool.query(CHECK_EXISTING_USER_BY_ID, [decoded.id]);
  if (rows.length === 0) {
    return res.status(404).json({ message: "User not found", status: false });
  }
  let userobj = { username: rows[0].username, role: rows[0].role };
  return res.status(200).json(userobj);
};
