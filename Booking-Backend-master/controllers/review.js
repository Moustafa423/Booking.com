const jwt = require("jsonwebtoken");

exports.createReview = (property) => {
  return function (req, res) {
    const Authentication = req.headers.authentication;
    jwt.verify(Authentication, "Authentication", (err, Data) => {
      if (Data) {
        property.findOne({ _id: req.params.propId }).then((prop) => {
          for (i of prop.reviews) {
            if (i.userId == Data.id) {
              res.send({
                success: false,
                msg: "Not allowed to make more than one review",
              });
            } else {
              property.findOne({ _id: req.params.propId }).then((data) => {
                const newReview = {
                  userId: Data.id,
                  body: req.body.body,
                  starRating: req.body.starRating,
                };
                data.reviews.push(newReview);

                data
                  .save()
                  .then((result) => res.send({ success: true, data: result }))
                  .catch((err) =>
                    res.send({ success: false, msg: err.message })
                  );
              });
            }
          }
        });
      }
      if (err) {
        res.send({ success: false, msg: err.message });
      }
    });
  };
};

exports.displayAllReviews = (property) => {
  return function (req, res) {
    console.log(property);
    const Authentication = req.headers.authentication;
    jwt.verify(Authentication, "Authentication", (err, Data) => {
      if (Data) {
        property
          .findOne({ _id: req.params.propId })
          .then((data) => {
            res.send({ success: true, data: data.reviews });
          })
          .catch((err) => res.send({ success: false, msg: err.message }));
      }
      if (err) {
        res.send({ success: false, msg: err.message });
      }
    });
  };
};

exports.updateReview = (property) => {
  return function (req, res) {
    console.log(property);
    const Authentication = req.headers.authentication;
    jwt.verify(Authentication, "Authentication", (err, Data) => {
      if (Data) {
        property
          .findOne({ _id: req.params.propId })
          .then((data) => {
            const review = data.reviews.id(req.params.reviewId);
            if (review.userId == Data.id) {
              review.body = req.body.body;
              review.starRating = req.body.starRating;
              data
                .save()
                .then((result) => res.send({ success: true, data: result }))
                .catche((err) =>
                  res.send({ success: false, msg: err.message })
                );
            }
          })
          .catch((err) => res.send({ success: false, msg: err.message }));
      }
      if (err) {
        res.send({ success: false, msg: err.message });
      }
    });
  };
};

exports.deleteReview = (property) => {
  return function (req, res) {
    console.log(property);
    const Authentication = req.headers.authentication;
    jwt.verify(Authentication, "Authentication", (err, Data) => {
      if (Data) {
        property
          .findOne({ _id: req.params.propId })
          .then((data) => {
            const review = data.reviews.id(req.params.reviewId);
            if (review.userId == Data.id) {
              data.reviews.id(req.params.reviewId).remove();
              data
                .save()
                .then((result) => res.send({ success: true, data: result }))
                .catche((err) =>
                  res.send({ success: false, msg: err.message })
                );
            }
          })
          .catch((err) => res.send({ success: false, msg: err.message }));
      }
      if (err) {
        res.send({ success: false, msg: err.message });
      }
    });
  };
};
