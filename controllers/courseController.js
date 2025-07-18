import cloudinary from "../config/cloudinary.js";
import courseModel from "../models/courseModel.js";

// @post - new course
export const newcourse = async (req, res) => {
  const { coursename, coursedesc, price, baseprice, image } = req.body;

  if (!coursename || !coursedesc || !price || !baseprice || !req.file) {
    return res.json({ success: false, message: "missing course information" });
  }

  try {
    // convert buffer to base64
    const base64Image = `data:${
      req.file.mimetype
    };base64,${req.file.buffer.toString("base64")}`;

    // upload to cloudinary
    const result = await cloudinary.uploader.upload(base64Image, {
      folder: "courses",
    });
    const courses = courseModel({
      courseName: coursename,
      courseDesc: coursedesc,
      price: price,
      Baseprice: baseprice,
      image: result.secure_url,
      createdBy: req.user.id,
      isPublic: true,
    });
    const course = await courses.save();
    return res.json({
      success: true,
      message: "course details saved successfully",
      course,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

// @put - edit course
export const updateCourse = async (req, res) => {
  const { id } = req.params;

  const { coursename, coursedesc, price, baseprice } = req.body;

  if (!coursename || !coursedesc || !price || !baseprice) {
    return res.json({ success: false, message: "missing course information" });
  }

  try {
    const updateCourse = await courseModel.findByIdAndUpdate(
      id,
      {
        courseName: coursename,
        courseDesc: coursedesc,
        price: price,
        BasePrice: baseprice,
        isPublic: true,
      },
      { new: true }
    );
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

export const getAdminCoursesById = async (req, res) => {
  const { id } = req.params;

  try {
    const course = await courseModel.findById(id);
    if (!course) {
      return res.json({ success: false, message: "no course data found" });
    }
    return res.json({ success: true, course: course });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
