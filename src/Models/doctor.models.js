const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    rate: { type: Number, required: true },
    clinic_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "clinic",
      required: true,
    },
    speciality_ids: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "speciality",
        required: true,
      },
    ],
    availability_ids: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "availability",
        required: true,
      },
    ],
  },
  {
    versionKey: false,
    timestamp: true,
  }
);

module.exports = mongoose.model("doctor", doctorSchema);
