const express = require("express");
const router = express.Router();

const upload = require("../controllers/uploadimages");

router.post("/single", upload.uploadSingle);
router.post("/multiple", upload.uploadMultiple);

module.exports = router;
