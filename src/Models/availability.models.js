const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema(
  {
    day: [{ type: String, required: true }],
    start_time: { type: String, required: true },
    end_time: { type: String, required: true },
    // slot: [{ type: String, required: true }],
  },
  {
    versionKey: false,
    timestamp: true,
  }
);

module.exports = mongoose.model("availability", availabilitySchema);
