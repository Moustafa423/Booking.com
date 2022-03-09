const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user" },
    body: {
      type: String,
      minLength: [3, "Min message charchter 3"],
      maxLength: [200, "Min message charchter 200"],
    },
    replay: { type: [String] },
  },
  { timestamps: true }
);

exports.messageSchema = messageSchema;
