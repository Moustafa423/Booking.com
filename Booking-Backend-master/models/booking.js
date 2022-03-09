const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");
const bookingSchema = new Schema(
  {
    guestId: { type: Schema.Types.ObjectId, ref: "user" },
    startAt: { type: Date, required: "Start Date is required!" },
    endAt: { type: Date, required: "Ending Date is required!" },
    totalPrice: { type: Number },
    days: { type: Number },
    guestsNum: { type: Number },
  },
  { timestamps: true }
);

function isValidBooking(proposedBooking, prop) {
  let check = prop && prop.length > 0;

  let isValid = true;

  if (check) {
    isValid = prop.every(function (booking) {
      const proposedStart = moment(proposedBooking.startAt).format(
        "YYYY-MM-DD"
      );
      const proposedEnd = moment(proposedBooking.endAt).format("YYYY-MM-DD");
      const actualStart = moment(booking.startAt).format("YYYY-MM-DD");
      const actualEnd = moment(booking.endAt).format("YYYY-MM-DD");

      return (
        (actualStart < proposedStart && actualEnd < proposedStart) ||
        (proposedEnd < actualEnd && proposedEnd < actualStart)
      );
    });
  }

  return isValid;
}
module.exports.isValidBooking = isValidBooking;
exports.bookingSchema = bookingSchema;
