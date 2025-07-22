import { Router } from "express";
import {
  aboutHtmlPageController,
  contactHtmlPageController,
  dashboardHtmlPageController,
  loginHtmlPageController,
  signupHtmlPageController,
} from "../controllers/htmlPageController.js";

const htmlRoute = Router();
htmlRoute.get("/", dashboardHtmlPageController);
htmlRoute.get("/signup", signupHtmlPageController);
htmlRoute.get("/login", loginHtmlPageController);
htmlRoute.get("/about", aboutHtmlPageController);
htmlRoute.get("/contact", contactHtmlPageController);

export default htmlRoute;
