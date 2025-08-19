import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

const connectDB = async () => {
  try {
    const con = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    });
  } catch (error) {
    console.log("DataBase Connection Error :>> ", error);
  }
};

// connectDB();

// const con = await mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
// });

// con.connect((err) => {
//   if (err) throw console.log("DataBase Connection Error :>> ", err);
//   console.log("DataBase Connected!");
// });
export default connectDB;
