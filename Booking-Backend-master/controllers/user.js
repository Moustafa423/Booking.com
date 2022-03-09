const user = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = (req, res) => {
  const newUser = new user({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    language: req.body.language,
    country: req.body.country,
    city: req.body.city,
    gender: req.body.gender,
    type: req.body.type,
    birthday: req.body.birthday,
    nationality: req.body.nationality,
    phone: req.body.phone,
    paymentDetails: req.body.paymentDetails,
    type: "user",
  });
  newUser
    .save()
    .then((result) => res.send({ success: true, data: result }))
    .catch((err) => res.send({ success: false, data: err.message }));
};
exports.createPartner = (req, res) => {
  const newUser = new user({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    language: req.body.language,
    country: req.body.country,
    city: req.body.city,
    gender: req.body.gender,
    type: req.body.type,
    birthday: req.body.birthday,
    nationality: req.body.nationality,
    phone: req.body.phone,
    paymentDetails: req.body.paymentDetails,
    type: "partner",
  });
  newUser
    .save()
    .then((result) => res.send({ success: true, data: result }))
    .catch((err) => res.send({ success: false, data: err.message }));
};
exports.loginUser = (req, res) => {
  user.findOne({ email: req.body.email }, (err, user) => {
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      const userToken = jwt.sign(
        {
          id: user.id,
          username: user.username,
          email: user.email,
          type: user.type,
        },
        "Authentication"
      );
      res.status(200).send({ success: true, token: userToken, data: user });
    } else {
      res.send({ success: false, msg: "invalid credentials" });
    }
  });
};
exports.loginAdmin = (req, res) => {
  user.findOne({ email: req.body.email }, (err, user) => {
    if (
      user &&
      bcrypt.compareSync(req.body.password, user.password) &&
      user.type == "admin"
    ) {
      const userToken = jwt.sign(
        {
          id: user.id,
          username: user.username,
          email: user.email,
          type: user.type,
        },
        "Authentication"
      );
      res.status(200).send({ success: true, token: userToken, data: user });
    } else {
      res.send({ success: false, msg: "invalid credentials" });
    }
  });
};

exports.displayUserById = (req, res) => {
  jwt.verify(req.headers.authentication, "Authentication", (err, data) => {
    if (data) {
      user
        .findOne({ _id: req.params.id })
        .then((result) => {
          res.status(200).send({ success: true, data: result });
        })
        .catch((err) => {
          res.status(404).send({ success: false, msg: err.message });
        });
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.displayUser = (req, res) => {
  jwt.verify(req.headers.authentication, "Authentication", (err, data) => {
    if (data && data.type == "admin") {
      user
        .find()
        .then((result) => {
          res.status(200).send({ success: true, data: result });
        })
        .catch((err) => {
          res.status(404).send({ success: false, msg: err.message });
        });
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.updateUser = (req, res) => {
  jwt.verify(req.headers.authentication, "Authentication", (err, data) => {
    if ((data && req.params.id == data.id) || (data && data.type == "admin")) {
      user
        .findOneAndUpdate(
          { _id: req.params.id },
          {
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            language: req.body.language,
            country: req.body.country,
            city: req.body.city,
            gender: req.body.gender,
            type: req.body.type,
            birthday: req.body.birthday,
            nationality: req.body.nationality,
            phone: req.body.phone,
            paymentDetails: req.body.paymentDetails,
          }
        )
        .then((result) => res.send({ success: true, data: result }));
    } else {
      res.send({ success: false, msg: "Not allowed to edit this user" });
    }
  });
};
exports.deleteUser = (req, res) => {
  jwt.verify(req.headers.authentication, "Authentication", (err, data) => {
    if ((data && req.params.id == data.id) || (data && data.type == "admin")) {
      user
        .deleteOne({ _id: req.params.id })
        .then((result) => res.send({ success: true, data: result }))
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};
