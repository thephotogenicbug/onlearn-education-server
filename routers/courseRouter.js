import express from "express";
import {
  deleteCourse,
  getAdminCourses,
  getPublicCourses,
  newcourse,
  updateCourse,
} from "../controllers/courseController.js";
import { isAdmin } from "../middleware/isAdmin.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const courseRouter = express.Router();

courseRouter.post("/new-course", authMiddleware, isAdmin, newcourse);
courseRouter.put("/update-course/:id", updateCourse);
courseRouter.delete("/delete-course/:id", deleteCourse);
courseRouter.get("/get-course-admin", authMiddleware, isAdmin, getAdminCourses);
courseRouter.get("/get-course-public", getPublicCourses);

export default courseRouter;
