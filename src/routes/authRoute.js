import { Router } from "express";
import { registerUserController } from "../controllers/registerUserController.js";

const authRoute = Router();

authRoute.post("/register", registerUserController);

export default authRoute;
