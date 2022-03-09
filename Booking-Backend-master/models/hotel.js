const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { bookingSchema } = require("./booking");
const { messageSchema } = require("./message");
const { reviewSchema } = require("./review");
const hotelFacilitiesSchema = mongoose.Schema({
  parking: { type: Boolean },
  breakfast: { type: Boolean },
  lunch: { type: Boolean },
  dinner: { type: Boolean },
  popularFacilities: { type: [String] },
});

const hotelRoomSchema = new mongoose.Schema({
  type: { type: String },
  smoking: { type: Boolean },
  roomName: { type: String },
  customName: { type: String },
  numOfRoomOfThisType: { type: Number },
  roomSize: { type: Number },
  price: { type: Number },
  bedType: { type: String },
  bedsNumber: { type: Number },
  guestsNumber: { type: Number },
  available: { type: Boolean },
  bookings: { type: [bookingSchema] },
});
const hotelAmenities = new mongoose.Schema({
  room: { type: [String] },
  food: { type: [String] },
  bathroom: { type: [String] },
  media: { type: [String] },
  services: { type: [String] },
  view: { type: [String] },
  accessibility: { type: [String] },
  entertainment: { type: [String] },
});
const hotelSchema = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: "user" },
    hotelName: {
      type: String,
      minLength: 3,
      maxLength: 50,
    },
    description: {
      type: String,
      minLength: [10, "Min charchters 500"],
      maxLength: [50, "Mac charchters 500"],
    },
    images: { type: [String] },
    country: { type: String },
    city: { type: String },
    streetAddress: { type: String },
    zipCode: { type: Number },
    starRating: { type: Number, min: 1, max: 10 },
    phone: { type: String },
    paymentOption: { type: Number },
    children: { type: Boolean },
    pets: { type: Boolean },
    checkIn: { type: String },
    checkOut: { type: String },
    cancellation: { type: Number },
    parking: { type: Boolean },
    breakfast: { type: Boolean },
    lunch: { type: Boolean },
    dinner: { type: Boolean },
    amenities: { type: hotelAmenities },
    rooms: { type: [hotelRoomSchema] },
    facilities: { type: hotelFacilitiesSchema },
    status: { type: String, default: "pending" },
    messages: { type: [messageSchema] },
    reviews: { type: [reviewSchema] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("hotel", hotelSchema);
