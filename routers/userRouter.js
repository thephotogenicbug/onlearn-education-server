import express from "express";
import {
  getUser,
  userLogin,
  userLogout,
  userRegister,
} from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/user-register", userRegister);
userRouter.post("/user-login", userLogin);
userRouter.post("/user-logout", userLogout);
userRouter.get("/get-user", authMiddleware, getUser);

export default userRouter;
