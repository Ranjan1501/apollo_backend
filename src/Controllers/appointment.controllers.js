const Appointment = require("../Models/appointment.models");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate({ path: "user_id" })
      .populate({ path: "doctor_id" })
      .populate({ path: "slot_id" })
      .lean()
      .exec();
    return res.status(200).json({ appointments });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: err.status });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id).lean().exec();
    return res.status(200).json({ appointment });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: err.status });
  }
});

router.post("", async (req, res) => {
  try {
    const newAppointment = await Appointment.create(req.body);
    return res.status(201).json({ newAppointment });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: err.status });
  }
});

module.exports = router;
