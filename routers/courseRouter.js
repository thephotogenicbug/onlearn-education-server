import express from "express";
import {
  deleteCourse,
  newcourse,
  updateCourse,
} from "../controllers/courseController.js";
import { isAdmin } from "../middleware/isAdmin.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const courseRouter = express.Router();

courseRouter.post("/new-course", authMiddleware, isAdmin, newcourse);
courseRouter.put("/update-course/:id", updateCourse);
courseRouter.delete("/delete-course/:id", deleteCourse);

export default courseRouter;
