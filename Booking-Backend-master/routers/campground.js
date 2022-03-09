const express = require("express");
const router = express.Router();
const campground = require("../controllers/campground");

router.post("/", campground.createCampground);
router.get("/", campground.displayAllCampgrounds);
router.get("/user", campground.displayCampgroundsByUserId);
router.get("/:id", campground.displayCampgroundById);
router.put("/:id", campground.updateCampground);
router.delete("/:id", campground.deleteCampground);

//room routers
router.post("/room/:id", campground.createRoom);
router.get("/room/:id", campground.displayRoomById);
router.get(
  "/room/:campgroundId/:roomId",
  campground.displayRoomsByCampgroundId
);
router.put("/room/:campgroundId/:roomId", campground.updateRoom);
router.delete("/room/:campgroundId/:roomId", campground.deleteRoom);

//bookings router
router.post("/booking/:propId/:roomId", campground.createBooking);
router.put("/booking/:propId/:roomId/:bookingId", campground.updateBooking);
router.delete("/booking/:propId/:roomId/:bookingId", campground.deleteBooking);
router.get("/booking/:propId", campground.displayAllBookings);

//message
router.post("/message/:propId", campground.createMessage());
router.get("/message/:propId", campground.displayAllMessages());
router.put("/message/:propId/:messageId", campground.updateMessage());
router.delete("/message/:propId/:messageId", campground.deleteMessage());

//review
router.post("/review/:propId", campground.createReview());
router.get("/review/:propId", campground.displayAllReviews());
router.put("/review/:propId/:reviewId", campground.updateReview());
router.delete("/review/:propId/:reviewId", campground.deleteReview());
module.exports = router;
