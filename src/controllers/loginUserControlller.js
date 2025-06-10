import { response } from "express";
import { responseUtil } from "../utils/resposneUtil.js";
import { User } from "../model/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
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
    const { _id, name } = user;

    const secretKey = process.env.JWT_SECRET_TOKEN;

    const token = jwt.sign(
      { userId: _id, username: name, email: email },
      secretKey,
      { expiresIn: "1h" }
    );
    res.cookie("authToken", token);
    responseUtil(res, "Login Successfully", 200, true, {
      error: "Login Successfully",
    });
  } catch (err) {
    return responseUtil(res, "Login failed", 500, false, {
      error: err.message,
    });
  }
};
