import express from "express";
import {
  adminlogin,
  adminlogout,
  adminregister,
} from "../controllers/userController.js";

const authRouter = express.Router();

// @post admin register,login,logout
authRouter.post("/admin-register", adminregister);
authRouter.post("/admin-login", adminlogin);
authRouter.post("/admin-logout", adminlogout);

export default authRouter;
