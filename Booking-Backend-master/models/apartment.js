const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { bookingSchema } = require("./booking");
const { messageSchema } = require("./message");
const { reviewSchema } = require("./review");

const apartmentBedRoomSchema = mongoose.Schema({
  twinBed: { type: Number },
  fullBed: { type: Number },
  queenBed: { type: Number },
  kingBed: { type: Number },
  bunkBed: { type: Number },
  sofaBed: { type: Number },
  futonBed: { type: Number },
});

const apartmentLivingRoomSchema = mongoose.Schema({
  sofaBed: { type: Number },
});
const apartmentFacilitiesSchema = mongoose.Schema({
  general: { type: [String] },
  view: { type: [String] },
  cookingAndCleaening: { type: [String] },
  entertainment: { type: [String] },
});
const apartmentSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "user" },
  apartmentName: {
    type: String,
    minLength: 3,
    maxLength: 50,
  },
  country: { type: String },
  city: { type: String },
  streetName: { type: String, minLength: 3, maxLength: 20 },
  homeNumber: { type: Number, maxLength: 7 },
  apartmentNumber: { type: Number, maxLength: 7 },
  bedRooms: { type: [apartmentBedRoomSchema] },
  livingRooms: { type: [apartmentLivingRoomSchema] },
  bathRooms: { type: Number },
  paymentOption: { type: Number },
  images: { type: [String] },
  facilities: { type: [apartmentFacilitiesSchema] },
  checkIn: { type: String },
  checkOut: { type: String },
  price: { type: Number },
  cancellation: { type: Number },
  bookings: { type: [bookingSchema] },
  messages: { type: [messageSchema] },
  reviews: { type: [reviewSchema] },
  phone: { type: String },
  zipCode: { type: Number },
  status: { type: String, default: "pending" },
  size: { type: Number },
  guestsNum: { type: Number },
  pets: { type: Boolean },
  children: { type: Boolean },
  events: { type: Boolean },
  smoking: { type: Boolean },
});
module.exports = mongoose.model("apartment", apartmentSchema);
