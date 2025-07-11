import courseModel from "../models/courseModel.js";

// @post - new course
export const newcourse = async (req, res) => {
  const { coursename, coursedesc, price, baseprice, image } =
    req.body;

  if (
    !coursename ||
    !coursedesc ||
    !price ||
    !baseprice ||
    !image
  ) {
    return res.json({ success: false, message: "missing course information" });
  }

  try {
    const courses = courseModel({
      courseName: coursename,
      courseDesc: coursedesc,
      price: price,
      Baseprice: baseprice,
      image: image,
      createdBy: req.user.id,
      isPublic: true,
    });
    courses.save();
    return res.json({
      success: true,
      message: "course details saved successfully",
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

// @put - edit course
export const updateCourse = async (req, res) => {
  const { id } = req.params;
  const { coursename, coursedesc, price, baseprice, image } =
    req.body;

  if (
    !coursename ||
    !coursedesc ||
    !price ||
    !baseprice ||
    !image
  ) {
    return res.json({ success: false, message: "missing course information" });
  }

  try {
    const updateCourse = await courseModel.findByIdAndUpdate(id, {
      courseName: coursename,
      courseDesc: coursedesc,
      price: price,
      BasePrice: baseprice,
      image: image,
      isPublic: true,
    });
    return res.json({
      success: true,
      message: "course details updated successfully",
      updateCourse,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// @put - edit course
export const deleteCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteCourse = await courseModel.findByIdAndDelete(id);
    if (!deleteCourse) {
      return res.json({
        success: false,
        message: "course data is invalid | missing",
      });
    }
    return res.json({ success: true, message: "course deleted successfully" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
// @get - courses created by admin
export const getAdminCourses = async (req, res) => {
  try {
    const courses = await courseModel.find({ createdBy: req.user.id });
    return res.json({ success: true, courses });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
// @get - courses for public
export const getPublicCourses = async (req, res) => {
  try {
    const courses = await courseModel.find({ isPublic: true });
    return res.json({ success: true, courses });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
