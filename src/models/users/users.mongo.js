const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  date: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  dob: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("users", usersSchema);
