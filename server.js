import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import courseRouter from "./routers/courseRouter.js";
import authRouter from "./routers/adminRouter.js";
import userRouter from "./routers/userRouter.js";

const app = express();
const port = process.env.PORT || 3000;
connectDB();

const allowedOrigins = ["http://localhost:5173", process.env.PROD_URL];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.get("/", (req, res) => {
  res.send("API working");
});

// course router
app.use("/api/course", courseRouter);
app.use("/api/admin", authRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Server is working on port ${port}`);
});
