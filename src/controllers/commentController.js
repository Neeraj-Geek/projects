import { responseUtil } from "../utils/resposneUtil.js";
import { commentModel } from "../model/commentModel.js";
import { ObjectId } from "mongodb";

export const getAllPostCommentByID = async (req, res) => {
  try {
    const postId = req.params.postId;
    const { userId } = req.user;
    const commentsObj = await commentModel.find({ post_id: postId });
    return responseUtil(res, "Comments fetch", 200, true, { commentsObj });
  } catch (error) {
    return responseUtil(res, "Unable to Delete Post", 500, false, {
      error: error.message,
    });
  }
};

export const addCommentOnPost = async (req, res) => {
  try {
    const postId = req.params.postId;
    console.log(postId);
    const { userId } = req.user;
    const { comment } = req.body;

    if (!comment?.trim()) {
      return responseUtil(res, "Comment is required.", 400, false, {
        error: "Missing or empty fields",
      });
    }
    const newCommentObj = new commentModel({
      post_id: new ObjectId(postId),
      comment: comment.trim(),
      comment_by: new ObjectId(userId),
    });
    await newCommentObj.save();
    return responseUtil(res, "Comment successfully", 201, true, {
      newCommentObj,
    });
  } catch (error) {
    return responseUtil(res, "Unable to post comment.", 500, false, {
      error: error.message,
    });
  }
};

export const updateCommentOnPost = async (req, res) => {
  try {
    const commentId = req.params.postId;
    const { userId } = req.user;
    const { comment } = req.body;

    if (!comment?.trim()) {
      return responseUtil(res, "Comment is required.", 400, false, {
        error: "Missing or empty fields",
      });
    }

    const updateComment = await commentModel.updateOne(
      { _id: commentId },
      { $set: { comment: comment.trim() } }
    );

    return responseUtil(res, "Updated Successfully", 200, true, {
      updateComment,
    });
  } catch (error) {
    return responseUtil(res, "Unable to post comment.", 500, false, {
      error: error.message,
    });
  }
};

export const deleteCommentOnPost = async (req, res) => {
  try {
    const commentId = req.params.postId;
    const { userId } = req.user;
    const { comment } = req.body;

    if (!comment?.trim()) {
      return responseUtil(res, "Comment is required.", 400, false, {
        error: "Missing or empty fields",
      });
    }

    const deletedComment = await commentModel.deleteOne(
      { _id: commentId },
      { comment_by: userId }
    );

    return responseUtil(res, "Deleted Successfully", 200, true, {
      deletedComment,
    });
  } catch (error) {
    return responseUtil(res, "Unable to post comment.", 500, false, {
      error: error.message,
    });
  }
};
