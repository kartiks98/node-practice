const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL;

const connectMongo = async () => {
  await mongoose.connect(MONGO_URL);
};

mongoose.connection.on("error", (err) => {
  console.error("MONGOOSE_ERROR", err);
});

module.exports = connectMongo;
