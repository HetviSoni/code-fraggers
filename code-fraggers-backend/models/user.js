const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: { type: String, unique: true, required: true },
    metamaskid: { type: String, unique: true, lowercase: true, required: true },
    email: { type: String, unique: true, lowercase: true, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
