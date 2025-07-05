import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import courseRouter from "./routers/courseRouter.js";
import authRouter from "./routers/adminRouter.js";

const app = express();
const port = process.env.PORT || 3000;
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

app.get("/", (req, res) => {
  res.send("API working");
});

// course router
app.use("/api/course", courseRouter);
app.use("/api/admin", authRouter);

app.listen(port, () => {
  console.log(`Server is working on port ${port}`);
});
