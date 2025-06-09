import { app } from "./app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const MONGO_URI = process.env.MONGO_DB; // Use your DB name
const port = 8080;

console.log(process.env.MONGO_DB);
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Local MongoDB Connected");
    app.listen(port, () => {
      console.log(`🚀 Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
  });
