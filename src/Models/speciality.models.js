const mongoose = require("mongoose");

const specialitySchema = new mongoose.Schema(
  {
    speciality_type: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamp: true,
  }
);

module.exports = mongoose.model("speciality", specialitySchema);
