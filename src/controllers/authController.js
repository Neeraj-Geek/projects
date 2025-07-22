import { User } from "../model/userModel.js";
import { responseUtil } from "../utils/resposneUtil.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import filePath from "../utils/filePath.js";

const salt = bcrypt.genSaltSync(10);
dotenv.config();
export const registerUserController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return responseUtil(
        res,
        "Oops! You have to fill all fields for registration!",
        400,
        false,
        { error: "Missing required fields" }
      );
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return responseUtil(res, "Email already registered", 409, false, {
        error: "Duplicate email",
      });
    }
    const hashPassword = bcrypt.hashSync(password, salt);

    const user = new User({ name, email, password: hashPassword });
    await user.save();
    return responseUtil(res, "User Register successfully", 200, true, { user });
  } catch (err) {
    return responseUtil(res, "Registration failed", 500, false, {
      error: error.message,
    });
  }
};

export const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return responseUtil(
        res,
        "Oops! You have to fill all fields for registration!",
        400,
        false,
        {
          error: "Missing required fields",
        }
      );
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      return responseUtil(
        res,
        "No user found with that username.",
        500,
        false,
        {
          error: "No user found with that username.",
        }
      );
    }
    const comparePass = await bcrypt.compare(password, user.password);
    if (!comparePass) {
      return responseUtil(res, "Invalid Password", 500, false, {
        error: "Invalid Password",
      });
    }
    const { _id, name } = user;

    const secretKey = process.env.JWT_SECRET_TOKEN;

    const token = jwt.sign(
      { userId: _id, username: name, email: email },
      secretKey,
      { expiresIn: "1h" }
    );
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: false,
    });
    return responseUtil(res, "Login Successful", 200, true, {
      userId: _id,
      username: name,
      email: email,
    });
  } catch (err) {
    return responseUtil(res, "Login failed", 500, false, {
      error: err.message,
    });
  }
};
export const logoutUserController = (req, res) => {
  res.clearCookie("authToken");
  responseUtil(res, "Logout Successfully.", 200),
    true,
    {
      error: "Logout Successfully.",
    };
};
