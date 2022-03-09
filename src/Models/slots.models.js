const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema(
  {
    start_time: {
      type: String,
      required: true,
    },
    end_time: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamp: true,
  }
);

module.exports = mongoose.model("slot", slotSchema);
