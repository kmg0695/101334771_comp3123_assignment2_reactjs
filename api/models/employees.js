import mongoose from "mongoose";

const { Schema } = mongoose;

const empSchema = new Schema({
  first_name: {
    type: String,
    maxLength: 100,
    required: true,
    unique: false,
  },
  last_name: {
    type: String,
    maxLength: 50,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    maxLength: 50,
    required: true,
    unique: false,
  },
  gender: {
    type: String,
    maxLength: 25,
    enum: ["Male", "Female", "Other"],
    unique: false,
  },
  salary: {
    type: Number,
    required: true,
    unique: false,
  },
});

export default mongoose.model("employees", empSchema);
