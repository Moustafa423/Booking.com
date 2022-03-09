const Message = require("../models/message");
const jwt = require("jsonwebtoken");

exports.createMessage = (property) => {
  return function (req, res) {
    console.log(property);
    const Authentication = req.headers.authentication;
    jwt.verify(Authentication, "Authentication", (err, Data) => {
      if (Data) {
        property.findOne({ _id: req.params.propId }).then((data) => {
          const newMessage = {
            userId: Data.id,
            body: req.body.body,
          };
          data.messages.push(newMessage);
          data
            .save()
            .then((result) => res.send({ success: true, data: result }))
            .catch((err) => res.send({ success: false, msg: err.message }));
        });
      }
      if (err) {
        res.send({ success: false, msg: err.message });
      }
    });
  };
};

exports.displayAllMessages = (property) => {
  return function (req, res) {
    const Authentication = req.headers.authentication;
    jwt.verify(Authentication, "Authentication", (err, Data) => {
      if (Data) {
        property
          .findOne({ _id: req.params.propId })
          .then((data) => {
            res.send({ success: true, data: data.messages });
          })
          .catch((err) => res.send({ success: false, msg: err.message }));
      }
      if (err) {
        res.send({ success: false, msg: err.message });
      }
    });
  };
};

exports.updateMessage = (property) => {
  return function (req, res) {
    console.log(property);
    const Authentication = req.headers.authentication;
    jwt.verify(Authentication, "Authentication", (err, Data) => {
      if (Data) {
        property
          .findOne({ _id: req.params.propId })
          .then((data) => {
            const message = data.messages.id(req.params.messageId);
            if (message.userId == Data.id || Data.type == "admin") {
              message.body = req.body.body;
              data
                .save()
                .then((result) => res.send({ success: true, data: result }))
                .catch((err) => res.send({ success: false, msg: err.message }));
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

exports.deleteMessage = (property) => {
  return function (req, res) {
    console.log(property);
    const Authentication = req.headers.authentication;
    jwt.verify(Authentication, "Authentication", (err, Data) => {
      if (Data) {
        property
          .findOne({ _id: req.params.propId })
          .then((data) => {
            const message = data.messages.id(req.params.messageId);
            if (message.userId == Data.id || Data.type == "admin") {
              data.messages.id(req.params.messageId).remove();
              data
                .save()
                .then((result) => res.send({ success: true, data: result }))
                .catch((err) => res.send({ success: false, msg: err.message }));
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

exports.createReplay = (property) => {
  return function (req, res) {
    const Authentication = req.headers.authentication;
    jwt.verify(Authentication, "Authentication", (err, Data) => {
      if (Data) {
        property.findOne({ _id: req.params.propId }).then((data) => {
          const msg = data.messages.id(req.params.msgId);
          const reply = req.body.replay;
          msg.replay.push(reply);
          data

            .save()
            .then((result) => res.send({ success: true, data: result }))
            .catch((err) => res.send({ success: false, msg: err.message }));
        });
      }
      if (err) {
        res.send({ success: false, msg: err.message });
      }
    });
  };
};
