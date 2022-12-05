/* eslint-disable func-names */
/* eslint-disable import/extensions */
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      maxLength: 100,
      index: { unique: true },
    },
    email: {
      type: String,
      unique: true,
      required: true,
      maxLength: 50,
    },
    password: {
      type: String,
      required: true,
      maxLength: 50,
    },
  },
  {
    methods: {
      verifyPass(password) {
        return bcrypt.compareSync(password, this.password);
      },
    },
  }
);

// prehook for hashing password after registration
userSchema.pre("save", async function save(next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

export default mongoose.model("users", userSchema);
