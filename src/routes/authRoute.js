import { Router } from "express";
import { registerUserController } from "../controllers/registerUserController.js";
import { loginUserController } from "../controllers/loginUserControlller.js";

const authRoute = Router();

authRoute.post("/register", registerUserController);
authRoute.post("/login", loginUserController);

export default authRoute;
