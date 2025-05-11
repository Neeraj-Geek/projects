import dotenv from "dotenv";
dotenv.config();
const DB = process.env.DB_NAME;

export const CHECK_EXISTING_USER = `select * FROM ${DB}.users where email =  ?;`;
export const CHECK_EXISTING_USER_BY_ID = `select * FROM ${DB}.users where id =  ?;`;

export const USER_URL_BY_ID = `select * FROM ${DB}.urls where user_id =  ? order by id DESC LIMIT 10;`;
export const All_URL = `select * FROM ${DB}.urls;`;

export const GET_ORG_URL = `SELECT original_url FROM ${DB}.urls WHERE short_url = ?;`;

// ********saveQuries***********

export const SAVE_USER = `INSERT INTO ${DB}.users ( username,email,password) VALUES (?,?,?);`;

export const SAVE_USER_URL = `INSERT INTO ${DB}.urls(user_id,original_url,short_url)VALUES(?,?,?);`;
