const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const replySchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user" },
    body: { type: String, maxLength: [300, "Max characters 300"] },
    replayImg: { type: String },
    likes: { type: Number },
  },
  { timestamps: true }
);

const commentSchema = new Schema(
  {
    postId: { type: Schema.Types.ObjectId, ref: "post" },
    userId: { type: Schema.Types.ObjectId, ref: "user" },
    body: { type: String, maxLength: [300, "Max characters 300"] },
    commentImg: { type: String },
    likes: { type: Number },
    reply: { type: [replySchema] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("comment", commentSchema);
