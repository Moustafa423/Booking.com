const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  // By default, multer removes file extensions so let's add them back
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const imageFilter = function (req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = "Only image files are allowed!";
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

exports.uploadSingle = (req, res) => {
  // 'profile_pic' is the name of our file input field in the HTML form
  let upload = multer({
    storage: storage,
    fileFilter: imageFilter,
  }).single("single_image");

  upload(req, res, function (err) {
    if (req.fileValidationError) {
      return res.send({ success: false, msg: req.fileValidationError });
    } else if (!req.file) {
      return res.send({
        success: false,
        msg: "Please select an image to upload",
      });
    } else if (err instanceof multer.MulterError) {
      return res.send({ success: false, msg: err.message });
    } else if (err) {
      return res.send({ success: false, msg: err.message });
    }

    // Display uploaded image for user validation
    res.send({ success: true, data: req.file.path });
  });
};
exports.uploadMultiple = (req, res) => {
  // 10 is the limit I've defined for number of uploaded files at once
  // 'multiple_images' is the name of our file input field
  let upload = multer({
    storage: storage,
    fileFilter: imageFilter,
  }).array("multiple_images", 10);

  upload(req, res, function (err) {
    if (req.fileValidationError) {
      return res.send({ success: false, msg: req.fileValidationError });
    } else if (err instanceof multer.MulterError) {
      return res.send({ success: false, msg: err.message });
    } else if (err) {
      return res.send({ success: false, msg: err.message });
    }

    let result = [];
    const files = req.files;
    let index, len;

    // Loop through all the uploaded images and display them on frontend
    for (index = 0, len = files.length; index < len; ++index) {
      result[index] = files[index].path;
    }
    res.send({ success: true, data: result });
  });
};
