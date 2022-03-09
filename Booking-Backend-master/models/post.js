const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "users" },
    title: {
      type: String,
      minLength: [3, "Min post title charachters 3"],
      maxLength: [50, "Min post title charachters 50"],
    },
    body: {
      type: String,
      minLength: [5, "Min post title charachters 5"],
      maxLength: [250, "Min post title charachters 250"],
    },

    location: { type: String },
    postImage: { type: String },
    likes: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", postSchema);
