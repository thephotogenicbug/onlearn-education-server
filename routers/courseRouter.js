import express from "express";
import { newcourse } from "../controllers/courseController.js";

const courseRouter = express.Router();

courseRouter.post("/new-course", newcourse);

export default courseRouter;
