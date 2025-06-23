import { Router } from "express";
import { searchController } from "../controllers/searchController.js";

const searchRoute = Router();

searchRoute.get("/:searchparam", searchController);

export default searchRoute;
