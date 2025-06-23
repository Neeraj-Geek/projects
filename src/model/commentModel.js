import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
    },
    post_id: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
    comment_by: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const commentModel = mongoose.model("comments", commentSchema);
