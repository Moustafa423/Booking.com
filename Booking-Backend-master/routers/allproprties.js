const express = require("express");
const router = express.Router();
const Campground = require("../models/campground");
const Apartment = require("../models/apartment");
const Hotel = require("../models/hotel.js");
const jwt = require("jsonwebtoken");

router.get("/pending", (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data && data.type == "admin") {
      let allprop = [];
      Hotel.find({ status: "pending" })
        .then((result) => {
          allprop.push(...result);
        })
        .catch((err) => res.send({ success: false, msg: err.message }));
      Apartment.find({ status: "pending" })
        .then((result) => {
          allprop.push(...result);
        })
        .catch((err) => res.send({ success: false, msg: err.message }));
      Campground.find({ status: "pending" })
        .then((result) => {
          allprop.push(...result);
          res.send({ success: true, data: allprop });
        })
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
  // res.send({ success: true, data: "allprop" });
});

module.exports = router;
