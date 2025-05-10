import dotenv from "dotenv";
dotenv.config();
const DB = process.env.DB_NAME;

export const CHECK_EXISTING_USER = `select * FROM ${DB}.users where email =  ?;`;
export const CHECK_EXISTING_USER_BY_ID = `select * FROM ${DB}.users where id =  ?;`;

// ********saveQuries***********

export const SAVE_USER = `INSERT INTO ${DB}.users ( username,email,password) VALUES (?,?,?);`;
