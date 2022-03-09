const mongoose = require("mongoose");

const clinicSchema = new mongoose.Schema(
  {
    city_name: { type: String, required: true },
    location: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamp: true,
  }
);

module.exports = mongoose.model("clinic", clinicSchema);
