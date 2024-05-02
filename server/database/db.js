const mongoose = require("mongoose");
require("dotenv").config();

const DBconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
    console.log("database connected");
  } catch (err) {
    console.error(`error ${err.message}`);
  }
};

module.exports = DBconnection;
