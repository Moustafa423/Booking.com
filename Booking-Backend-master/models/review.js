const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user" },
    body: { type: String },
    starRating: { type: Number, min: 1, max: 10 },
  },
  { timestamps: true },
  { _id: false }
);

exports.reviewSchema = reviewSchema;
