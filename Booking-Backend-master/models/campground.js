const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { bookingSchema } = require("./booking");
const { messageSchema } = require("./message");
const { reviewSchema } = require("./review");
const campgroundFacilitiesSchema = mongoose.Schema({
  parking: { type: Boolean },
  breakfast: { type: Boolean },
  lunch: { type: Boolean },
  dinner: { type: Boolean },
  popularFacilities: { type: [String] },
});
const campgroundAmenitiesSchema = new mongoose.Schema({
  room: { type: [String] },
  food: { type: [String] },
  bathroom: { type: [String] },
  media: { type: [String] },
  services: { type: [String] },
  view: { type: [String] },
  accessibility: { type: [String] },
  entertainment: { type: [String] },
});

const campgroundRoomSchema = mongoose.Schema({
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

const campgroundSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "user" },
  campgroundName: {
    type: String,
    minLength: 3,
    maxLength: 50,
  },
  zipCode: { type: Number },
  phone: { type: String },
  guestsCanUse: { type: [String] },
  breakfast: { type: Boolean },
  smoking: { type: Boolean },
  pets: { type: Boolean },
  children: { type: Boolean },
  parties: { type: Boolean },
  isBathRoomPrivate: { type: Boolean },
  bathroomItems: { type: [String] },
  country: { type: String },
  city: { type: String },
  rooms: { type: [campgroundRoomSchema] },
  paymentOption: { type: Number },
  images: { type: [String] },
  checkIn: { type: String },
  checkOut: { type: String },
  cancellationPolicy: { type: Number },
  streetAddress: { type: String },
  messages: { type: [messageSchema] },
  reviews: { type: [reviewSchema] },
  facilities: { type: campgroundFacilitiesSchema },
  amenities: { type: campgroundAmenitiesSchema },
  status: { type: String, default: "pending" },
});

module.exports = mongoose.model("campground", campgroundSchema);
