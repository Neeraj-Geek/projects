import { Router } from "express";
import {
  loginUserController,
  registerUserController,
} from "../controllers/authController.js";

const authRoute = Router();

authRoute.post("/register", registerUserController);
authRoute.post("/login", loginUserController);

export default authRoute;
