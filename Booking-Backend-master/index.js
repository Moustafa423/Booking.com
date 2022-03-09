const express = require("express");
const app = express();
const db = require("./db.js");
const cors = require("cors");
const helmet = require("helmet");
const apartment = require("./routers/apartment");
const user = require("./routers/user");
const hotel = require("./routers/hotel");
const campground = require("./routers/campground");
const post = require("./routers/post");
const comment = require("./routers/comment");
const Post = require("./models/post");
const morgan = require("morgan");
const images = require("./routers/images");
const allprop = require("./routers/allproprties");
app.use(express.static("uploads"));

if (app.get("env") == "development") {
  app.use(morgan("tiny"));
}
app.use(cors());

app.use(express.json({ limit: "50mb" }));

app.use(helmet());

app.use("/user", user);

app.use("/upload/image", images);

app.use("/apartment", apartment);

app.use("/hotel", hotel);

app.use("/campground", campground);

app.use("/post", post);

app.use("/comment", comment);

app.use("/allproprties", allprop);

let port = process.env.PORT || 3000;

app.listen(port);
