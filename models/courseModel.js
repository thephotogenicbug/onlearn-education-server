import mongoose from "mongoose";

const courseSchema = mongoose.Schema(
  {
    courseName: { type: String, required: true },
    courseDesc: { type: String, required: true },
    price: { type: Number, required: true },
    Baseprice: { type: Number, required: true },
    noOfStudents: { type: Number, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const courseModel =
  mongoose.models.courses || mongoose.model("courses", courseSchema);
export default courseModel;
