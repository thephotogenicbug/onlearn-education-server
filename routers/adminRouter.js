import express from "express";
import {
  adminlogin,
  adminlogout,
  adminregister,
  getAdmin,
} from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const authRouter = express.Router();

// @post admin register,login,logout
authRouter.post("/admin-register", adminregister);
authRouter.post("/admin-login", adminlogin);
authRouter.post("/admin-logout", adminlogout);
authRouter.get("/get-admin", authMiddleware, getAdmin);

export default authRouter;
