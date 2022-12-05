import mongoose from "mongoose";

const { Schema } = mongoose;

const empSchema = new Schema({
  first_name: {
    type: String,
    maxLength: 100,
    required: true,
  },
  last_name: {
    type: String,
    maxLength: 50,
    required: true,
  },
  email: {
    type: String,
    maxLength: 50,
    required: true,
  },
  gender: {
    type: String,
    maxLength: 25,
    enum: ["Male", "Female", "Other"],
  },
  salary: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("employees", empSchema);
