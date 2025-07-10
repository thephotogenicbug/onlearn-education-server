export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin === true) {
    next();
  } else {
    return res
      .status(403)
      .json({ success: false, message: "Admin access only" });
  }
};
