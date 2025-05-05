import filePath from "../utils/filePath.js";
import { CHECK_EXISTING_USER, SAVE_USER } from "../db/user_db_queries.js";
import pool from "../utils/mysql.js";
import bcrypt from "bcrypt";
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
    console.log("11111 :>> ", 11111);
    console.log(req.body);
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
    res.status(200).json({ success: "User Created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: err.message });
  }
};
