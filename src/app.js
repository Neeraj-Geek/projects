import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import user_router from "./routes/users_route.js";
import { user_url_redirect_controller } from "./controllers/user_controller.js";

const app = express();

app.use(
  cors({
    origin: "*", // or '*' for all
    credentials: true, // important for cookies/sessions
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import

//routes declaration
app.use("/", user_router);
app.get("/user/:shortcode", user_url_redirect_controller);

// http://localhost:8000/api/v1/users/register

export { app };
