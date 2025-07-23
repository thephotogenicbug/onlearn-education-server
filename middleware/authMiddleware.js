import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  // Get token from cookies
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "No token provided in cookies" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // contains user ID and isAdmin
    req.body = req.body || {};
    req.body.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};
