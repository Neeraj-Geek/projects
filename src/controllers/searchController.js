import { Post } from "../model/postsModel.js";
import { User } from "../model/userModel.js";
import { responseUtil } from "../utils/resposneUtil.js";

export const searchController = async (req, res) => {
  try {
    const queryParam = req.params.searchparam?.trim();
    if (!queryParam) {
      return responseUtil(res, "Search parameter is required.", 400, false, {
        error: "Missing or empty fields",
      });
    }

    const resultData = await Post.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "created_by",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $match: {
          user: { $ne: [] }, // ensure INNER JOIN behavior
          $or: [
            { title: { $regex: queryParam, $options: "i" } }, // filter by post title
            { "user.name": { $regex: queryParam, $options: "i" } }, // or user name
          ],
        },
      },
      {
        $unwind: "$user",
      },
    ]);
    console.log(resultData);
    return responseUtil(res, "Find successfully", 200, true, {
      results: resultData,
    });
  } catch (error) {
    return responseUtil(res, "Unable to find user or posts", 500, false, {
      error: error.message,
    });
  }
};
