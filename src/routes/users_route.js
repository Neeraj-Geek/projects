import express from "express";
import {
  user_dashboard_controller,
  user_login_controller,
  user_register_controller,
  user_signup_controller,
} from "../controllers/user_controller.js";

const user_router = express.Router();

user_router.get("/login", user_login_controller);
user_router.get("/signup", user_signup_controller);
user_router.get("/", user_dashboard_controller);

user_router.post("/register", user_register_controller);
export default user_router;
