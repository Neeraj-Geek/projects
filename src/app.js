import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/usersRoute.js";
import postRoutes from "./routes/postRoutes.js";

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

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoutes);

export { app };
