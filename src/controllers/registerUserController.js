import { User } from "../model/userModel.js";
import { responseUtil } from "../utils/resposneUtil.js";

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

    const user = new User(req.body);
    await user.save();
    return responseUtil(res, "User Register successfully", 200, true, { user });
  } catch (err) {
    return responseUtil(res, "Registration failed", 500, false, {
      error: error.message,
    });
  }
};
