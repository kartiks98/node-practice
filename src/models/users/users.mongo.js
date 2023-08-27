const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  date: {
    required: true,
    type: Date,
  },
  name: {
    required: true,
    type: String,
  },
  dob: {
    required: true,
    type: Date,
  },
});

module.exports = mongoose.model("users", usersSchema);
