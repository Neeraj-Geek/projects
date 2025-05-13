import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({ path: "../.env" });

let Port = 8080;
app.listen(Port, () => {
  console.log(`⚙️ Server is running at port : ${Port}`);
});
