import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/usersRoute.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoute from "./routes/commentsRoute.js";
import { tokenCheck } from "./utils/verifyJwtToken.js";
import searchRoute from "./routes/searchRoute.js";
import htmlRoute from "./routes/htmlRoute.js";

const app = express();

app.use(
  cors({
    origin: "*", // or '*' for all
    credentials: true, // important for cookies/sessions
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/", htmlRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoutes);
app.use("/api/comments", tokenCheck, commentRoute);
app.use("/api/search", tokenCheck, searchRoute);

export { app };
