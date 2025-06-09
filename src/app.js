import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute.js";

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

export { app };
