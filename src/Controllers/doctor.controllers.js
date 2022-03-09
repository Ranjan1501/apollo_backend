const Doctor = require("../Models/doctor.models");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find()
      .populate({ path: "clinic_id" })
      .populate({ path: "speciality_ids" })
      .populate({ path: "availability_ids" })
      .lean()
      .exec();
    return res.status(200).json({ doctors });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: err.status });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id).lean().exec();
    return res.status(200).json({ doctor });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: err.status });
  }
});

router.post("", async (req, res) => {
  try {
    const newDoctors = await Doctor.create(req.body);
    return res.status(201).json({ newDoctors });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: err.status });
  }
});

module.exports = router;
