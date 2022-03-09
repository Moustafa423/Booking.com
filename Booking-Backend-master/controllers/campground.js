const Campground = require("../models/campground");
const jwt = require("jsonwebtoken");
const { isValidBooking } = require("../models/booking");
const message = require("./message");
const review = require("./review");

exports.createCampground = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      const newCampground = new Campground({
        owner: data.id,
        campgroundName: req.body.campgroundName,
        country: req.body.country,
        guestsCanUse: req.body.guestsCanUse,
        zipCode: req.body.zipCode,
        paymentOption: req.body.paymentOption,
        images: req.body.images,
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
        cancellationPolicy: req.body.cancellationPolicy,
        breakfast: req.body.breakfast,
        smoking: req.body.smoking,
        pets: req.body.pets,
        children: req.body.children,
        parties: req.body.parties,
        phone: req.body.phone,
        streetAddress: req.body.streetAddress,
        rooms: req.body.rooms,
      });
      newCampground
        .save()
        .then((result) => res.send({ success: true, data: result }))
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.updateCampground = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Campground.findOne({ _id: req.params.id })
        .then((campground) => {
          if (data.id == campground.owner || data.type == "admin") {
            campground.campgroundName = req.body.campgroundName;
            campground.country = req.body.country;
            campground.guestsCanUse = req.body.guestsCanUse;
            campground.paymentOption = req.body.paymentOption;
            campground.images = req.body.images;
            campground.checkIn = req.body.checkIn;
            campground.checkOut = req.body.checkOut;
            campground.cancellationPolicy = req.body.cancellationPolicy;
            campground.breakfast = req.body.breakfast;
            campground.smoking = req.body.smoking;
            campground.pets = req.body.pets;
            campground.children = req.body.children;
            campground.parties = req.body.parties;
            campground.status = req.body.status;
            campground.zipCode = req.body.zipCode;
            campground.phone = req.body.phone;
            campground.streetAddress = req.body.streetAddress;
            campground.rooms = req.body.rooms;
            campground
              .save()
              .then((result) => res.send({ success: true, data: result }))
              .catch((err) => res.send({ success: false, msg: err.message }));
          } else {
            res.send("Not allowed to edit this Campground");
          }
        })
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.deleteCampground = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Campground.findOne({ _id: req.params.id })
        .then((campground) => {
          if (data.id === campground.owner || data.type == "admin") {
            Campground.deleteOne({ _id: req.params.id })
              .then((result) => res.send({ success: true, data: result }))
              .catch((err) => res.send({ success: false, msg: err.message }));
          } else {
            res.send({
              success: false,
              msg: "Not allowed to delete the campground",
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

exports.displayAllCampgrounds = (req, res) => {
  Campground.find()
    .populate("owner", "-_id -password")
    .then((result) => res.send({ success: true, data: result }))
    .catch((err) => res.send({ success: false, msg: err.message }));
};
exports.displayCampgroundsByUserId = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Campground.find({ owner: data.id })
        .then((result) => res.send({ success: true, data: result }))
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.displayCampgroundById = (req, res) => {
  Campground.findOne({ _id: req.params.id })
    .then((result) => {
      res.send({ success: true, data: result });
    })
    .catch((err) => res.send({ success: false, msg: err.message }));
};

//room functions
exports.createRoom = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Campground.findOne({ _id: req.params.id })
        .then((campground) => {
          if (campground.owner == data.id || data.type == "admin") {
            campground.rooms.push({
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
              available: req.body.available,
            });
            campground
              .save()
              .then((result) => res.send({ success: true, data: result }))
              .catch((err) => res.send({ success: false, msg: err.message }));
          } else {
            res.send({
              success: false,
              msg: "Not allowed to add room in this campground",
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
      Campground.findOne({ _id: req.params.campgroundId })
        .then((campground) => {
          if (campground.owner == data.id || data.type == "admin") {
            const room = campground.rooms.id(req.params.roomId);
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
            room.available = req.body.available;
            campground
              .save()
              .then((result) => {
                res.send({ success: true, data: result });
              })
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

exports.deleteRoom = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Campground.findOne({ _id: req.params.campgroundId }).then(
        (campground) => {
          if (campground.owner == data.id || data.type == "admin") {
            campground.rooms.id(req.params.roomId).remove();
            campground
              .save()
              .then((result) => res.send({ success: true, data: result }))
              .catch((err) => res.send({ success: false, msg: err.message }));
          } else {
            res.send({ success: false, msg: "Not Allowed to edit this room" });
          }
        }
      );
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.displayRoomById = (req, res) => {
  Campground.findOne({ _id: req.params.id })
    .then((campground) => {
      res.send({ success: true, data: campground.rooms });
    })
    .catch((err) => res.send({ success: false, msg: err.message }));
};

exports.displayRoomsByCampgroundId = (req, res) => {
  Campground.findOne({ _id: req.params.campgroundId })
    .then((campground) => {
      res.send({ success: true, data: campground.rooms.id(req.params.roomId) });
    })
    .catch((err) => res.send({ success: false, msg: err.message }));
};

//room facilites functions

exports.createBooking = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, Data) => {
    if (Data) {
      Campground.findOne({ _id: req.params.propId }).then((data) => {
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
      });
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
      Campground.findOne({ _id: req.params.propId })
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
      Campground.findOne({ _id: req.params.propId }).then((data) => {
        const room = data.rooms.id(req.params.roomId);
        const booking = room.bookings.id(req.params.bookingId);
        if (booking.guestId == Data.id || Data.type == "admin") {
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
      });
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
      Campground.findOne({ _id: req.params.propId }).then((data) => {
        const room = data.rooms.id(req.params.roomId);
        const booking = room.bookings.id(req.params.bookingId);
        if (booking.guestId == Data.id) {
          room.bookings.id(req.params.bookingId).remove();
          data
            .save()
            .then((result) => res.send({ success: true, data: result }))
            .catch((err) => res.send({ success: false, msg: err.message }));
        }
      });
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.createMessage = () => {
  return message.createMessage(Campground);
};

exports.displayAllMessages = () => {
  return message.displayAllMessages(Campground);
};

exports.updateMessage = () => {
  return message.updateMessage(Campground);
};

exports.deleteMessage = () => {
  return message.deleteMessage(Campground);
};

exports.createReview = () => {
  return review.createReview(Campground);
};

exports.displayAllReviews = () => {
  return review.displayAllReviews(Campground);
};

exports.updateReview = () => {
  return review.updateReview(Campground);
};

exports.deleteReview = () => {
  return review.deleteReview(Campground);
};
