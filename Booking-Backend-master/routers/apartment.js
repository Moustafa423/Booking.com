const express = require("express");
const router = express.Router();

const apartment = require("../controllers/apartment");

router.post("/", apartment.createApartment);
router.get("/", apartment.displayAllApartments);
router.get("/user", apartment.displayApartmentsByUserId);
router.get("/search", apartment.displayApartmentById);
router.put("/:id", apartment.updateApartment);
router.delete("/:id", apartment.deleteApartment);
//bed rooms routers
router.post("/bedroom/:id", apartment.createBedRoom);
router.put("/bedroom/:apartmentId/:roomId", apartment.updateBedRoom);
router.delete("/bedroom/:apartmentId/:roomId", apartment.deleteBedRoom);
router.get("/bedroom/:id", apartment.displayBedRooms);
router.get("/bedroom/:apartmentId/:roomId", apartment.displayBedRoomById);
//living room router
router.post("/livingroom/:id", apartment.createLivingRoom);
router.put("/livingroom/:apartmentId/:roomId", apartment.updateLivingRoom);
router.delete("/livingroom/:apartmentId/:roomId", apartment.deleteLivingRoom);
router.get("/livingroom/:id", apartment.displayBedRooms);
router.get("/livingroom/:apartmentId/:roomId", apartment.displayBedRoomById);
//booking router
router.post("/booking/:id", apartment.createBooking);
router.put("/booking/:propId/:bookingId", apartment.updateBooking);
router.delete("/booking/:propId/:bookingId", apartment.deleteBooking);
router.get("/booking/:id", apartment.displayAllBookings);
//message
router.post("/message/:propId", apartment.createMessage());
router.get("/message/:propId", apartment.displayAllMessages());
router.put("/message/:propId/:messageId", apartment.updateMessage());
router.delete("/message/:propId/:messageId", apartment.deleteMessage());
//review
router.post("/review/:propId", apartment.createReview());
router.get("/review/:propId", apartment.displayAllReviews());
router.put("/review/:propId/:reviewId", apartment.updateReview());
router.delete("/review/:propId/:reviewId", apartment.deleteReview());

module.exports = router;
