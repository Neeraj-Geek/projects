import { Router } from "express";
import {
  loginUserController,
  logoutUserController,
  registerUserController,
} from "../controllers/authController.js";

const authRoute = Router();

authRoute.post("/register", registerUserController);
authRoute.post("/login", loginUserController);
authRoute.get("/logout", logoutUserController);

export default authRoute;
