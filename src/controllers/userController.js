import { User } from "../model/userModel.js";
import { responseUtil } from "../utils/resposneUtil.js";

export const userProfileController = async (req, res) => {
  const user = await User.findOne(
    { _id: req.user.userId },
    { _id: 0, email: 1, name: 1 }
  );
  console.log(user);
  //   return responseUtil(user, "User data", 200, true, {});
  return responseUtil(res, "User data", 200, true, { user });
};
