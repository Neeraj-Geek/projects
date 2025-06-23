import { Router } from "express";
import {
  addCommentOnPost,
  deleteCommentOnPost,
  getAllPostCommentByID,
  updateCommentOnPost,
} from "../controllers/commentController.js";

const commentRoute = Router();
commentRoute.get("/:postId", getAllPostCommentByID);
commentRoute.post("/:postId", addCommentOnPost);
commentRoute.put("/:postId", updateCommentOnPost);
commentRoute.delete("/:postId", deleteCommentOnPost);

export default commentRoute;
