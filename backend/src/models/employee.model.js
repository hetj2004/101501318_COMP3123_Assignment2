import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    department: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    salary: {
      type: Number,
      required: true
    },
    profilePicture: {
      type: String
    }
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
