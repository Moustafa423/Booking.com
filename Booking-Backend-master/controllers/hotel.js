const Hotel = require("../models/hotel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { isValidBooking } = require("../models/booking");
const message = require("./message");
const review = require("./review");

exports.creatHotel = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      const newHotel = new Hotel({
        owner: data.id,
        hotelName: req.body.hotelName,
        starRating: req.body.starRating,
        description: req.body.description,
        country: req.body.country,
        city: req.body.city,
        streetAddress: req.body.streetAddress,
        zipCode: req.body.zipCode,
        phone: req.body.phone,
        paymentOption: req.body.paymentOption,
        children: req.body.children,
        pets: req.body.pets,
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
        facilities: req.body.facilities,
        amenities: req.body.amenities,
        images: req.body.images,
        rooms: req.body.rooms,
      });
      newHotel
        .save()
        .then((result) => {
          res.send({ success: true, data: result });
        })
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.displayHotel = (req, res) => {
  Hotel.find()
    .then((result) => res.send({ success: true, data: result }))
    .catch((err) => res.send({ success: false, msg: err.message }));
};

exports.displayHotelByUserId = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Hotel.find({ owner: data.id })
        .then((result) => res.send({ success: true, data: result }))
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.displayHotelById = (req, res) => {
  Hotel.findOne({ _id: req.params.id })
    .then((result) => res.send({ success: true, data: result }))
    .catch((err) => res.send({ success: false, msg: err.message }));
};
exports.updateHotel = (req, res) => {
  jwt.verify(req.headers.authentication, "Authentication", (err, data) => {
    if (data) {
      Hotel.findOne({ _id: req.params.id }).then((hotel) => {
        if (hotel.owner == data.id || data.type == "admin") {
          hotel.hotelName = req.body.hotelName;
          hotel.description = req.body.description;
          hotel.starRating = req.body.starRating;
          hotel.country = req.body.country;
          hotel.city = req.body.city;
          hotel.streetAddress = req.body.streetAddress;
          hotel.zipCode = req.body.zipCode;
          hotel.phone = req.body.phone;
          hotel.paymentOption = req.body.paymentOption;
          hotel.children = req.body.children;
          hotel.pets = req.body.pets;
          hotel.checkIn = req.body.checkIn;
          hotel.checkOut = req.body.checkOut;
          hotel.facilities = req.body.facilities;
          hotel.amenities = req.body.amenities;
          hotel.images = req.body.images;
          hotel.status = req.body.status;
        }
        hotel
          .save()
          .then((result) => res.send({ success: true, data: result }))
          .catch((err) => res.send({ success: false, msg: err.message }));
      });
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};
exports.deleteHotel = (req, res) => {
  Hotel.findOneAndRemove({ _id: req.params.id })
    .then((result) => res.send({ success: true, data: result }))
    .catch((err) => res.send({ success: false, msg: err.message }));
};

//Rooms functions

exports.createRoom = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Hotel.findOne({ _id: req.params.id })
        .then((hotel) => {
          if (hotel.owner == data.id || data.type == "admin") {
            hotel.rooms.push({
              type: req.body.type,
              smoking: req.body.smoking,
              roomName: req.body.roomName,
              customName: req.body.customName,
              numOfRoomOfThisType: req.body.numOfRoomOfThisType,
              roomSize: req.body.roomSize,
              price: req.body.price,
              bedType: req.body.bedType,
              bedsNumber: req.body.bedsNumber,
              guestsNumber: req.body.guestsNumber,
              facilities: req.body.facilities,
              available: req.body.available,
            });
            hotel
              .save()
              .then((result) => res.send({ success: true, data: result }))
              .catch((err) => res.send({ success: false, msg: err.message }));
          } else {
            res.send({
              success: false,
              msg: "Not allowed add room to this property",
            });
          }
        })
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.updateRoom = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Hotel.findOne({ _id: req.params.hotelId })
        .then((hotel) => {
          if (hotel.owner == data.id || data.type == "admin") {
            const room = hotel.rooms.id(req.params.roomId);
            room.type = req.body.type;
            room.smoking = req.body.smoking;
            room.roomName = req.body.roomName;
            room.customName = req.body.customName;
            room.numOfRoomOfThisType = req.body.numOfRoomOfThisType;
            room.roomSize = req.body.roomSize;
            room.price = req.body.price;
            room.bedType = req.body.bedType;
            room.bedsNumber = req.body.bedsNumber;
            room.guestsNumber = req.body.guestsNumber;
            room.facilities = req.body.facilities;
            room.available = req.body.available;

            hotel
              .save()
              .then((result) => {
                res.send({ success: true, data: result });
              })
              .catch((err) => {
                res.send({ success: false, msg: err.message });
              });
          } else {
            res.send({ success: false, msg: "Not allowed to edit this room" });
          }
        })
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.deleteRoom = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Hotel.findOne({ _id: req.params.hotelId })
        .then((hotel) => {
          if (hotel.owner == data.id || data.type == "admin") {
            hotel.rooms.id(req.params.roomId).remove();
            hotel
              .save()
              .then((result) => res.send({ success: true, data: result }))
              .catch((err) => res.send({ success: false, msg: err.message }));
          } else {
            res.send({
              success: false,
              msg: "Not allowed to delete this room",
            });
          }
        })
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.displayRooms = (req, res) => {
  Hotel.findOne({ _id: req.params.id })
    .then((hotel) => {
      res.send({ success: true, data: hotel.rooms });
    })
    .catch((err) => res.send({ success: false, msg: err.message }));
};

exports.displayRoomById = (req, res) => {
  Hotel.findOne({ _id: req.params.hotelId })
    .then((hotel) => {
      res.send({ success: true, data: hotel.rooms.id(req.params.roomId) });
    })
    .catch((err) => res.send({ success: false, msg: err.message }));
};

//Facilites Functions
exports.createFacilities = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Hotel.findOne({ _id: req.params.id })
        .then((hotel) => {
          if (hotel.owner == data.id || data.type == "admin") {
            hotel.facilities = {
              general: req.body.general,
              view: req.body.view,
              entertainment: req.body.entertainment,
            };
            hotel
              .save()
              .then((result) => res.send({ success: true, data: result }))
              .catch((err) => res.send({ success: false, msg: err.message }));
          } else {
            res.send({
              success: false,
              msg: "Not allowed to add facilities in this property",
            });
          }
        })
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.updateFacilities = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Hotel.findOne({ _id: req.params.hotelId })
        .then((hotel) => {
          if (hotel.owner == data.id || data.type == "admin") {
            hotel.facilities.general = req.body.general;
            hotel.facilities.view = req.body.view;
            hotel.facilities.entertainment = req.body.entertainment;
            hotel
              .save()
              .then((result) => {
                res.send({ success: true, data: result });
              })
              .catch((err) => {
                res.send({ success: false, msg: err.message });
              });
          } else {
            res.send({
              success: false,
              msg: "Not allowed to edit this facilities",
            });
          }
        })
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.deleteFacilities = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Hotel.findOne({ _id: req.params.hotelId })
        .then((hotel) => {
          if (hotel.owner == data.id || data.type == "admin") {
            hotel.facilities = undefined;
            hotel
              .save()
              .then((result) => res.send({ success: true, data: result }))
              .catch((err) => res.send({ success: false, msg: err.message }));
          } else {
            res.send("You Cannot Delete This hotel facilities");
          }
        })
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.displayFacilities = (req, res) => {
  Hotel.findOne({ _id: req.params.id })
    .then((hotel) => {
      res.send({ success: true, data: hotel.facilities });
    })
    .catch((err) => res.send({ success: false, msg: err.message }));
};

exports.createBooking = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, Data) => {
    if (Data) {
      Hotel.findOne({ _id: req.params.propId })
        .then((data) => {
          const room = data.rooms.id(req.params.roomId);
          const newBooking = {
            guestId: Data.id,
            startAt: req.body.startAt,
            endAt: req.body.endAt,
            days: req.body.days,
            guestsNum: req.body.guestsNum,
            totalPrice: req.body.totalPrice,
          };
          if (isValidBooking(newBooking, room.bookings)) {
            room.bookings.push(newBooking);
            data
              .save()
              .then((result) => {
                res.send({ success: true, data: result });
              })
              .catch((err) => res.send({ success: false, msg: err.message }));
          } else {
            res.send({ success: false, msg: "This date is already booked" });
          }
        })
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.displayAllBookings = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, Data) => {
    if (Data) {
      let allBookings = [];
      console.log(req.params);
      Hotel.findOne({ _id: req.params.propId })
        .then((data) => {
          for (let i of data.rooms) {
            for (let j of i.bookings) {
              allBookings.push(j);
            }
          }
          res.send({ success: true, data: allBookings });
        })
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.updateBooking = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, Data) => {
    if (Data) {
      Hotel.findOne({ _id: req.params.propId })
        .then((data) => {
          const room = data.rooms.id(req.params.roomId);
          const booking = room.bookings.id(req.params.bookingId);
          if (booking.guestId == Data.id) {
            const newBooking = {
              startAt: req.body.startAt,
              endAt: req.body.endAt,
              days: req.body.days,
              guestsNum: req.body.guestsNum,
              totalPrice: req.body.totalPrice,
            };

            if (isValidBooking(newBooking, room.bookings)) {
              booking.startAt = newBooking.startAt;
              booking.endAt = newBooking.endAt;
              booking.days = newBooking.days;
              booking.guestsNum = newBooking.guestsNum;
              booking.totalPrice = newBooking.totalPrice;
              data
                .save()
                .then((result) => {
                  res.send({ success: true, data: result });
                })
                .catch((err) => res.send({ success: false, msg: err.message }));
            } else {
              res.send({ success: false, msg: "This date is already booked" });
            }
          }
        })
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};
exports.deleteBooking = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, Data) => {
    if (Data) {
      Hotel.findOne({ _id: req.params.propId })
        .then((data) => {
          const room = data.rooms.id(req.params.roomId);
          const booking = room.bookings.id(req.params.bookingId);
          if (booking.guestId == Data.id) {
            room.bookings.id(req.params.bookingId).remove();
            data
              .save()
              .then((result) => res.send({ success: true, data: result }))
              .catch((err) => res.send({ success: false, msg: err.message }));
          }
        })
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.createReplay = () => {
  return message.createReplay(Hotel);
};

exports.createMessage = () => {
  return message.createMessage(Hotel);
};

exports.displayAllMessages = () => {
  return message.displayAllMessages(Hotel);
};

exports.updateMessage = () => {
  return message.updateMessage(Hotel);
};

exports.deleteMessage = () => {
  return message.deleteMessage(Hotel);
};

exports.createReview = () => {
  return review.createReview(Hotel);
};

exports.displayAllReviews = () => {
  return review.displayAllReviews(Hotel);
};

exports.updateReview = () => {
  return review.updateReview(Hotel);
};

exports.deleteReview = () => {
  return review.deleteReview(Hotel);
};
