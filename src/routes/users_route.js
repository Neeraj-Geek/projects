import express from "express";
import {
  user_dashboard_controller,
  user_data_controller,
  user_login_check_controller,
  user_login_controller,
  user_logout_controller,
  user_register_controller,
  user_save_url_controller,
  user_signup_controller,
  user_url_controller,
  user_url_redirect_controller,
} from "../controllers/user_controller.js";

const user_router = express.Router();

user_router.get("/login", user_login_controller);
user_router.get("/signup", user_signup_controller);
user_router.get("/", user_dashboard_controller);

user_router.post("/register", user_register_controller);
user_router.post("/login", user_login_check_controller);
user_router.get("/logout", user_logout_controller);

user_router.get("/userdata", user_data_controller);
user_router.get("/userurl", user_url_controller);

user_router.post("/shorten", user_save_url_controller);

export default user_router;
