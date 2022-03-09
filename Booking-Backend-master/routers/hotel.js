const express = require("express");
const router = express.Router();

const hotel = require("../controllers/hotel");

router.post("/", hotel.creatHotel);
router.get("/", hotel.displayHotel);
router.get("/user", hotel.displayHotelByUserId);
router.get("/:id", hotel.displayHotelById);
router.put("/:id", hotel.updateHotel);
router.delete("/:id", hotel.deleteHotel);
//rooms router
router.get("/room/:id", hotel.displayRooms);
router.get("/room/:hotelId/:roomId", hotel.displayRoomById);
router.post("/room/:id", hotel.createRoom);
router.put("/room/:hotelId/:roomId", hotel.updateRoom);
router.delete("/room/:hotelId/:roomId", hotel.deleteRoom);
//facilities router
router.get("/facilities/:id", hotel.displayFacilities);
router.post("/facilities/:id", hotel.createFacilities);
router.put("/facilities/:hotelId/:facilitiesId", hotel.updateFacilities);
router.delete("/facilities/:hotelId", hotel.deleteFacilities);
//bookings router
router.post("/booking/:propId/:roomId", hotel.createBooking);
router.put("/booking/:propId/:roomId/:bookingId", hotel.updateBooking);
router.delete("/booking/:propId/:roomId/:bookingId", hotel.deleteBooking);
router.get("/booking/:propId", hotel.displayAllBookings);
//message
router.post("/message/:propId", hotel.createMessage());
router.post("/message/replay/:propId/:msgId", hotel.createReplay());
router.get("/message/:propId", hotel.displayAllMessages());
router.put("/message/:propId/:messageId", hotel.updateMessage());
router.delete("/message/:propId/:messageId", hotel.deleteMessage());
//review
router.post("/review/:propId", hotel.createReview());
router.get("/review/:propId", hotel.displayAllReviews());
router.put("/review/:propId/:reviewId", hotel.updateReview());
router.delete("/review/:propId/:reviewId", hotel.deleteReview());
module.exports = router;
