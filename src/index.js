import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({ path: "../.env" });

connectDB()
  .then(() => {
    let Port = process.env.PORT || 8000;
    app.listen(Port, () => {
      console.log(`⚙️ Server is running at port : ${Port}`);
      console.log("Database Connected");
    });
  })
  .catch((err) => {
    console.log(" db connection failed !!! ", err);
  });
