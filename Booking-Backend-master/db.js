const mongoose = require("mongoose");

const url = `mongodb+srv://booking:booking@booking.j3tzp.mongodb.net/Booking?retryWrites=true&w=majority`;

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
