const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email is required",
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: { type: "string", minLength: 6, maxLength: 80, required: true },
  firstName: {
    type: "string",
    minLength: [3, "Too short, min is 4 characters"],
    maxLength: [20, "Too long, max is 20 characters"],
  },
  lastName: {
    type: "string",
    minLength: [3, "Too short, min is 4 characters"],
    maxLength: [20, "Too long, max is 20 characters"],
  },
  username: {
    type: "string",
    minLength: [3, "Too short, min is 4 characters"],
    maxLength: [32, "Too long, max is 32 characters"],
  },
  language: {
    type: "string",
    enum: ["english", "arabic"],
    default: "english",
  },
  country: { type: "string" },
  city: { type: "string" },
  personalImage: {
    data: Buffer,
    contentType: String,
  },
  paymentDetails: { type: "number" },
  birthday: { type: Date },
  phone: { type: Number },
  gender: { type: String, enum: ["male", "female"] },
  nationality: { type: "string", minLength: 3, maxLength: 20 },
  type: { type: String, enum: ["user", "partner", "admin"] },
});

module.exports = mongoose.model("user", userSchema);
