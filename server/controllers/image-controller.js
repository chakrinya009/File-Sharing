const File = require("../modals/file");

const uploadImage = async (req, res) => {
  console.log(req);
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
  };
  try {
    const file = await File.create(fileObj);
    console.log(file);
    res.status(200).json({ path: `http://localhost:8080/file/${file._id}` });
  } catch (err) {
    console.error(err.message);
  }
};

const downloadImage = async (req, res) => {
  try {
    const file = await File.findById(req.params.fileId);

    file.downloadContent++;
    await file.save();

    res.download(file.path, file.name);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = { uploadImage, downloadImage };
