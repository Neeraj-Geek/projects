import { Router } from "express";
import {
  userProfileController,
  userPublicProfileController,
  userUpdateProfileController,
} from "../controllers/userController.js";
import { tokenCheck } from "../utils/verifyJwtToken.js";

const userRoute = Router();
// self profile
userRoute.get("/me", tokenCheck, userProfileController);
userRoute.put("/me", tokenCheck, userUpdateProfileController);

// public Profile routes
userRoute.get("/:id", tokenCheck, userPublicProfileController);

export default userRoute;
