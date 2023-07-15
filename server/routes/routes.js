const express = require("express");
const {
  uploadImage,
  downloadImage,
} = require("../controllers/image-controller");
const upload = require("../util.js/upload");

const router = express.Router();

router.post("/upload", upload.single("file"), uploadImage);
router.get("file/:fileId", downloadImage);

module.exports = router;
