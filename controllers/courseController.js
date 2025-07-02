import courseModel from "../models/courseModel.js";

// @post - new course
export const newcourse = async (req, res) => {
  const { coursename, coursedesc, price, baseprice, no_of_students, image } =
    req.body;

  if (
    !coursename ||
    !coursedesc ||
    !price ||
    !baseprice ||
    !no_of_students ||
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
      noOfStudents: no_of_students,
      image: image,
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
