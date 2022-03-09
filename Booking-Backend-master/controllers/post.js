const Post = require("../models/post");
const jwt = require("jsonwebtoken");

exports.createPost = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      const newPost = new Post({
        userId: data.id,
        title: req.body.title,
        body: req.body.Body,
        location: req.body.location,
      });
      newPost
        .save()
        .then((result) => res.send({ success: true, data: result }))
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.updatePost = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Post.findOne({ _id: req.params.id })
        .then((Posting) => {
          if (data.id == Posting.userId || data.type == "admin") {
            Posting.title = req.body.title;
            Posting.body = req.body.Body;
            Posting.location = req.body.location;
            Posting.save()
              .then((result) => res.send({ success: true, data: result }))
              .catch((err) => res.send({ success: false, msg: err.message }));
          } else {
            res.send({ success: false, msg: "Not allowed to edit this post" });
          }
        })
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.deletePost = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Post.findOne({ _id: req.params.id })
        .then((Posting) => {
          if (data.id == Posting.userId || data.type == "admin") {
            Post.deleteOne({ _id: req.params.id })
              .then((result) => res.send({ success: true, data: result }))
              .catch((err) => res.send({ success: false, msg: err.message }));
          } else {
            res.send({
              success: false,
              msg: "Not allowed to delete this post",
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

exports.displayAllPosts = (req, res) => {
  Post.find()
    .then((result) => res.send({ success: true, data: result }))
    .catch((err) => res.send({ success: false, msg: err.message }));
};

exports.displayPostById = (req, res) => {
  Post.findOne({ _id: req.params.id })
    .then((result) => {
      res.send({ success: true, data: result });
    })
    .catch((err) => res.send({ success: false, msg: err.message }));
};

exports.displayPostByUserId = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Post.find({ userId: data.id })
        .then((result) => {
          res.send({ success: true, data: result });
        })
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
  });
};
