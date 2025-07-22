import { Router } from "express";
import {
  loginHtmlPageController,
  signupHtmlPageController,
} from "../controllers/htmlPageController.js";

const htmlRoute = Router();
htmlRoute.get("/", loginHtmlPageController);
htmlRoute.get("/signup", signupHtmlPageController);

export default htmlRoute;
