import express from "express";
import {
  userLogin,
  userLogout,
  userRegister,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/user-register", userRegister);
userRouter.post("/user-login", userLogin);
userRouter.post("/user-logout", userLogout);

export default userRouter;
