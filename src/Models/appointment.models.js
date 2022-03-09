const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    slot_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "slot",
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    doctor_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctor",
      required: true,
    },
    slot_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "slot",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamp: true,
  }
);

module.exports = mongoose.model("appointment", appointmentSchema);
