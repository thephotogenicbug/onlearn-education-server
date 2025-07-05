import express from "express";
import {
  deleteCourse,
  newcourse,
  updateCourse,
} from "../controllers/courseController.js";

const courseRouter = express.Router();

courseRouter.post("/new-course", newcourse);
courseRouter.put("/update-course/:id", updateCourse);
courseRouter.delete("/delete-course/:id", deleteCourse);

export default courseRouter;
