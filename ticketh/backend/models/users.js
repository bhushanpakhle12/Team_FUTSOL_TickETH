const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;