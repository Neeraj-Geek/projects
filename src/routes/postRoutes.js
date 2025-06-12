import { Router } from "express";
import {
  createPost,
  deletePostByID,
  getAllPost,
  getPostByID,
  updatePostByID,
} from "../controllers/postController.js";
import { tokenCheck } from "../utils/verifyJwtToken.js";

const postRoutes = Router();

postRoutes.post("/", tokenCheck, createPost);
postRoutes.get("/", tokenCheck, getAllPost);
postRoutes.get("/:id", tokenCheck, getPostByID);
postRoutes.put("/:id", tokenCheck, updatePostByID);
postRoutes.delete("/:id", tokenCheck, deletePostByID);

export default postRoutes;
