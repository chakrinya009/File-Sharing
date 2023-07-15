const express = require("express");
const router = require("./routes/routes");
const cors = require("cors");
const DBconnection = require("./database/db");
require("dotenv").config();

const app = express();

app.use(cors());

app.use("/", router);

const PORT = process.env.PORT || 8000;

DBconnection();

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
