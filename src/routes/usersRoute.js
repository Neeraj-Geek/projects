import { Router } from "express";
import { userProfileController } from "../controllers/userController.js";
import { tokenCheck } from "../utils/verifyJwtToken.js";

const userRoute = Router();
userRoute.get("/me", tokenCheck, userProfileController);

export default userRoute;
