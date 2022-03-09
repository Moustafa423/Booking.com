const Comment = require("../models/comment");
const jwt = require("jsonwebtoken");

exports.createComment = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      const newComment = new Comment({
        userId: data.id,
        postId: req.params.postId,
        body: req.body.Body,
      });
      newComment
        .save()
        .then((result) => res.send({ success: true, data: result }))
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.updateComment = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Comment.findOne({ _id: req.params.commentId })
        .then((comment) => {
          if (data.id == comment.userId || data.type == "admin") {
            comment.body = req.body.Body;
            comment
              .save()
              .then((result) => res.send({ success: true, data: result }))
              .catch((err) => res.send({ success: false, msg: err.message }));
          } else {
            res.send("You cannot edit this comment");
          }
        })
        .catch((err) => res.send({ success: false, msg: err.message }));
    }
    if (err) {
      res.send({ success: false, msg: err.message });
    }
  });
};

exports.deleteComment = (req, res) => {
  const Authentication = req.headers.authentication;
  jwt.verify(Authentication, "Authentication", (err, data) => {
    if (data) {
      Comment.findOne({ _id: req.params.commentId })
        .then((comment) => {
          if (data.id == comment.userId || data.type == "admin") {
            Comment.deleteOne({ _id: req.params.commentId })
              .then((result) => res.send({ success: true, data: result }))
              .catch((err) => res.send({ success: false, msg: err.message }));
          } else {
            res.send({
              success: false,
              msg: "Not allowed to delete the comment",
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

exports.displayCommentsByPostId = (req, res) => {
  Comment.find({ postId: req.params.postId })
    .then((result) => {
      res.send({ success: true, data: result });
    })
    .catch((err) => res.send({ success: false, msg: err.message }));
};

exports.displayCommentById = (req, res) => {
  Comment.findOne({ _id: req.params.commentId })
    .then((result) => {
      res.send({ success: true, data: result });
    })
    .catch((err) => res.send({ success: false, msg: err.message }));
};

exports.createReply = (req, res) => {
  Comment.findOne({ _id: req.params.commentId })
    .then((comment) => {
      comment.reply.push({ body: req.body.Body });
      comment
        .save()
        .then((result) => res.send({ success: true, data: result }))
        .catch((err) => res.send({ success: false, msg: err.message }));
    })
    .catch((err) => res.send({ success: false, msg: err.message }));
};

exports.displayRepliesByCommentId = (req, res) => {
  Comment.findOne({ _id: req.params.commentId })
    .then((comment) => {
      res.send({ success: true, data: comment.reply });
    })
    .catch((err) => res.send({ success: false, msg: err.message }));
};
