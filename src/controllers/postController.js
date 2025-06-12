import { responseUtil } from "../utils/resposneUtil.js";
import { Post } from "../model/postsModel.js";
import { ObjectId } from "mongodb";

export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { userId } = req.user;
    if (!title?.trim() || !content?.trim()) {
      return responseUtil(res, "Title and content are required.", 400, false, {
        error: "Missing or empty fields",
      });
    }
    const post = new Post({
      title: title.trim(),
      content: content.trim(),
      created_by: new ObjectId(userId),
    });
    await post.save();
    return responseUtil(res, "Post Uploaded successfully", 201, true, { post });
  } catch (error) {
    return responseUtil(res, "Unable to Create Post", 500, false, {
      error: err.message,
    });
  }
};

export const getAllPost = async (req, res) => {
  try {
    const post = await Post.find({});

    return responseUtil(res, "Post fetch", 200, true, { post });
  } catch (error) {
    return responseUtil(res, "Unable to Create Post", 500, false, {
      error: error.message,
    });
  }
};
export const getPostByID = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findOne({ _id: postId });

    return responseUtil(res, "Post fetch", 200, true, { post });
  } catch (error) {
    return responseUtil(res, "Unable to Create Post", 500, false, {
      error: error.message,
    });
  }
};

export const updatePostByID = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.updateOne(
      { _id: postId },
      { $set: { title: req.body.title, content: req.body.content } }
    );

    return responseUtil(res, "Updated Successfully", 200, true, { post });
  } catch (error) {
    return responseUtil(res, "Unable to update Post", 500, false, {
      error: error.message,
    });
  }
};

export const deletePostByID = async (req, res) => {
  try {
    const postId = req.params.id;
    const { userId } = req.user;
    const post = await Post.deleteOne({
      _id: new ObjectId(postId),
      created_by: userId,
    });

    if (post.deletedCount === 1) {
      return responseUtil(res, "Deleted Successfully", 200, true, {});
    } else {
      return responseUtil(
        res,
        "No Post Found or Not Authorized",
        404,
        false,
        {}
      );
    }
  } catch (error) {
    return responseUtil(res, "Unable to Delete Post", 500, false, {
      error: error.message,
    });
  }
};
