import mongoose from "mongoose";

const courseSchema = mongoose.Schema(
  {
    courseName: { type: String, required: true },
    courseDesc: { type: String, required: true },
    price: { type: Number, required: true },
    Baseprice: { type: Number, required: true },
    noOfStudents: { type: Number, default: 0 },
    image: { type: String, required: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    isPublic: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const courseModel =
  mongoose.models.courses || mongoose.model("courses", courseSchema);
export default courseModel;
