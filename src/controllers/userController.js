import { User } from "../model/userModel.js";
import { responseUtil } from "../utils/resposneUtil.js";

export const userProfileController = async (req, res) => {
  try {
    const user = await User.findOne(
      { _id: req.user.userId },
      { _id: 0, email: 1, name: 1 }
    );
    console.log(user);
    //   return responseUtil(user, "User data", 200, true, {});
    return responseUtil(res, "User data", 200, true, { user });
  } catch (error) {
    return responseUtil(res, "No user found with that username.", 404, false, {
      error: "No user found with that username.",
    });
  }
};

export const userUpdateProfileController = async (req, res) => {
  try {
    const updatedName = req.body.name;
    const user = await User.updateOne(
      { _id: req.user.userId },
      { $set: { name: updatedName } }
    );
    console.log(user);
    return responseUtil(res, "Profile Updated", 200, true, { user });
  } catch (error) {
    return responseUtil(res, "No user found with that username.", 404, false, {
      error: "No user found with that username.",
    });
  }
};

export const userPublicProfileController = async (req, res) => {
  try {
    const user = await User.findOne(
      { _id: req.params.id },
      { _id: 0, email: 1, name: 1 }
    );
    console.log(user);
    //   return responseUtil(user, "User data", 200, true, {});
    return responseUtil(res, "User data", 200, true, { user });
  } catch (error) {
    return responseUtil(res, "No user found with that username.", 404, false, {
      error: "No user found with that username.",
    });
  }
};
