const Apartment = require("../models/apartment");
const { isValidBooking } = require("../models/booking");
const jwt = require("jsonwebtoken");
const message = require("./message");
const review = require("./review");

exports.createApartment = (req, res) => {
  const Authentication = req.headers.authentication;
  console.log(Authentication);
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      const newApartment = new Apartment({
        owner: data.id,
        apartmentName: req.body.apartmentName,
        country: req.body.country,
        streetName: req.body.streetName,
        homeNumber: req.body.homeNumber,
        apartmentNumber: req.body.apartmentNumber,
        city: req.body.city,
        price: req.body.price,
        paymentOption: req.body.paymentOption,
        images: req.body.images,
        facilities: req.body.facilities,
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
        cancellation: req.body.cancellation,
        bedRooms: req.body.bedRooms,
        livingRooms: req.body.livingRooms,
        phone: req.body.phone,
        zipCode: req.body.zipCode,
        bathRooms: req.body.bathRooms,
        size: req.body.size,
        guestsNum: req.body.guestsNum,
        pets: req.body.pets,
        children: req.body.children,
        events: req.body.events,
        smoking: req.body.smoking,
      });
      newApartment
        .save()
        .then((Apartment) => res.send({ success: true, data: Apartment }))
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.updateApartment = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Apartment.findOne({ _id: req.params.id })
        .then((apartment) => {
          if (data.id == apartment.owner || data.type == "admin") {
            apartment.apartmentName = req.body.apartmentName;
            apartment.country = req.body.country;
            apartment.streetName = req.body.streetName;
            apartment.apartmentNumber = req.body.apartmentNumber;
            apartment.price = req.body.price;
            apartment.paymentOption = req.body.paymentOption;
            apartment.images = req.body.images;
            apartment.facilities = req.body.facilities; // and Room
            apartment.checkIn = req.body.checkIn;
            apartment.checkOut = req.body.checkOut;
            apartment.cancellation = req.body.cancellation;
            apartment.bedRooms = req.body.bedRooms;
            apartment.livingRooms = req.body.livingRooms;
            apartment.status = req.body.status;
            apartment.zipCode = req.body.zipCode;
            apartment.bathRooms = req.body.bathRooms;
            apartment.size = req.body.size;
            apartment.guestsNum = req.body.guestsNum;
            apartment.pets = req.body.pets;
            apartment.children = req.body.children;
            apartment.events = req.body.events;
            apartment.smoking = req.body.smoking;
            apartment
              .save()
              .then((result) => res.send({ success: true, data: result }))
              .catch((err) => res.send({ success: false, msg: err.message }));
          } else {
            res.send({
              success: false,
              msg: "You are not allowed to edit the apartment",
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
exports.deleteApartment = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Apartment.findOne({ _id: req.params.id })
        .then((apartment) => {
          if (data.id === apartment.owner || data.type == "admin") {
            apartment
              .deleteOne({ _id: req.params.id })
              .then((result) => res.send({ success: true, data: result }))
              .catch((err) => res.send({ success: false, msg: err.message }));
          } else {
            res.send({
              success: false,
              msg: "You are not allowed to delete the apartment",
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

exports.displayAllApartments = (req, res) => {
  Apartment.find()
    .populate("owner", "-_id -password")

    .then((apartment) => res.send({ success: true, data: apartment }))

    .catch((err) => res.send({ success: false, msg: err.message }));
};

exports.any = () => {
  if (apartment) res.send({ success: true, data: apartment });
  if (err) res.send({ success: false, msg: err.message });
};

exports.displayApartmentsByUserId = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Apartment.find({ owner: data.id })
        .populate("owner", "-_id -password")
        .then((result) => res.send({ success: true, data: result }))
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.displayApartmentById = (req, res) => {
  Apartment.findOne({ _id: req.params.id })
    .populate("owner", "-_id -password")
    .then((apartment) => {
      res.send({ success: true, data: apartment });
    })
    .catch((err) => res.send({ success: false, msg: err.message }));
};
exports.createBedRoom = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Apartment.findOne({ _id: req.params.id })
        .then((apartment) => {
          if (apartment.owner == data.id || data.type == "admin") {
            apartment.bedRooms.push({
              twinBed: req.body.twinBed,
              fullBed: req.body.fullBed,
              QueenBed: req.body.QueenBed,
              KingBed: req.body.KingBed,
              bunkBed: req.body.bunkBed,
              sofaBed: req.body.sofaBed,
              futonBed: req.body.futonBed,
            });
            apartment
              .save()
              .then((apartment) => res.send({ success: true, data: apartment }))
              .catch((err) => res.send({ success: false, msg: err.message }));
          } else {
            res.send({
              success: false,
              msg: "You Cannot Add Room In This Property",
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
exports.createLivingRoom = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Apartment.findOne({ _id: req.params.id })
        .then((apartment) => {
          if (apartment.owner == data.id || data.type == "admin") {
            apartment.livingRooms.push({
              sofaBed: req.body.sofaBed,
            });
            apartment
              .save()
              .then((apartment) => res.send({ success: true, data: apartment }))
              .catch((err) => res.send({ success: false, msg: err.message }));
          } else {
            res.send({
              success: false,
              msg: "Not allowed to add room in this apartment",
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
exports.updateBedRoom = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Apartment.findOne({ _id: req.params.apartmentId }).then((apartment) => {
        if (apartment.owner == data.id || data.type == "admin") {
          const bedRoom = apartment.bedRooms.id(req.params.roomId);
          bedRoom.twinBed = req.body.twinBed | 0;
          bedRoom.fullBed = req.body.fullBed | 0;
          bedRoom.queenBed = req.body.queenBed | 0;
          bedRoom.kingBed = req.body.kingBed | 0;
          bedRoom.bunkBed = req.body.bunkBed | 0;
          bedRoom.sofaBed = req.body.sofaBed | 0;
          bedRoom.futonBed = req.body.sofaBed | 0;
          apartment
            .save()
            .then((apartment) => {
              res.send({ success: true, data: apartment });
            })
            .catch((err) => res.send({ success: false, msg: err.message }));
        } else {
          res.send({
            success: false,
            msg: "You are not allowed to edit this room",
          });
        }
      });
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.updateLivingRoom = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Apartment.findOne({ _id: req.params.apartmentId }).then((apartment) => {
        if (apartment.owner == data.id || data.type == "admin") {
          const livingRoom = apartment.livingRooms.id(req.params.roomId);
          livingRoom.sofaBed = req.body.sofaBed;
          apartment
            .save()
            .then((data) => {
              res.send({ success: true, data: data });
            })
            .catch((err) => res.send({ success: false, msg: err.message }));
        } else {
          res.send({
            success: false,
            msg: "You are not allowed to edit this room",
          });
        }
      });
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.deleteLivingRoom = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Apartment.findOne({ _id: req.params.apartmentId }).then((apartment) => {
        if (apartment.owner == data.id || data.type == "admin") {
          apartment.livingRooms.id(req.params.roomId).remove();
          apartment
            .save()
            .then((apartment) => res.send({ success: true, data: apartment }))
            .catch((err) => res.send({ success: false, msg: err.message }));
        } else {
          res.send({ success: false, msg: "Not allowed to delete this room" });
        }
      });
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};
exports.deleteBedRoom = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Apartment.findOne({ _id: req.params.apartmentId }).then((apartment) => {
        if (apartment.owner == data.id || data.type == "admin") {
          apartment.bedRooms.id(req.params.roomId).remove();
          apartment
            .save()
            .then((apartment) => res.send({ success: true, data: apartment }))
            .catch((err) => res.send({ success: false, msg: err.message }));
        } else {
          res.send({ success: false, msg: "Not allowed to delete this room" });
        }
      });
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.displayBedRooms = (req, res) => {
  Apartment.findOne({ _id: req.params.id })
    .then((apartment) => {
      res.send({ success: true, data: apartment.bedRooms });
    })
    .catch((err) => res.send({ success: false, msg: err.message }));
};

exports.displayLivingRooms = (req, res) => {
  Apartment.findOne({ _id: req.params.id })
    .then((apartment) => {
      res.send({ success: true, data: apartment.bedRooms });
    })
    .catch((err) => res.send({ success: false, msg: err.message }));
};

exports.displayBedRoomById = (req, res) => {
  Apartment.findOne({ _id: req.params.apartmentId })
    .then((apartment) => {
      res.send({
        success: true,
        data: apartment.bedRooms.id(req.params.roomId),
      });
    })
    .catch((err) => res.send({ success: false, msg: err.message }));
};

exports.displayLivingRoomById = (req, res) => {
  Apartment.findOne({ _id: req.params.apartmentId })
    .then((apartment) => {
      res.send({
        success: true,
        data: apartment.livingRooms.id(req.params.roomId),
      });
    })
    .catch((err) => res.send({ success: false, msg: err.message }));
};

exports.createBooking = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, Data) => {
    if (Data) {
      Apartment.findOne({ _id: req.params.id })
        .populate("owner", "-_id -password")
        .then((data) => {
          const newBooking = {
            guestId: Data.id,
            startAt: req.body.startAt,
            endAt: req.body.endAt,
            days: req.body.days,
            guestsNum: req.body.guestsNum,
          };
          if (isValidBooking(newBooking, data.bookings)) {
            data.bookings.push(newBooking);
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
      Apartment.findOne({ _id: req.params.id })
        .populate("bookings.guestId", "-_id -password")
        .then((result) => {
          res.send({ success: true, data: result.bookings });
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
      Apartment.findOne({ _id: req.params.propId }).then((data) => {
        const booking = data.bookings.id(req.params.bookingId);

        if (booking.guestId == data.id || data.type == "admin") {
          const newBooking = {
            startAt: req.body.startAt,
            endAt: req.body.endAt,
            days: req.body.days,
            guestsNum: req.body.guestsNum,

            totalPrice: req.body.totalPrice,
          };
          console.log(data.bookings);
          if (isValidBooking(newBooking, data.bookings)) {
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
      Apartment.findOne({ _id: req.params.propId })
        .then((data) => {
          const booking = data.bookings.id(req.params.bookingId);
          console.log(booking);
          if (booking.guestId == Data.id || Data.type == "admin") {
            data.bookings.id(req.params.bookingId).remove();
            data
              .save()
              .then((result) => res.send({ success: true, data: result }))
              .catch((err) => res.send({ success: false, msg: err.message }));
          } else {
            res.send({
              success: false,
              msg: "Not allowed to delete this booking",
            });
          }
        })
        .catch((err) => {
          res.send({ success: false, msg: err.message });
        });
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.createMessage = () => {
  return message.createMessage(Apartment);
};

exports.displayAllMessages = () => {
  return message.displayAllMessages(Apartment);
};

exports.updateMessage = () => {
  return message.updateMessage(Apartment);
};

exports.deleteMessage = () => {
  return message.deleteMessage(Apartment);
};

exports.createReview = () => {
  return review.createReview(Apartment);
};

exports.displayAllReviews = () => {
  return review.displayAllReviews(Apartment);
};

exports.updateReview = () => {
  return review.updateReview(Apartment);
};

exports.deleteReview = () => {
  return review.deleteReview(Apartment);
};
