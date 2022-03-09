const Availability = require("../Models/availability.models");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const availabilities = await Availability.find().lean().exec();
    return res.status(200).json({ availabilities });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: err.status });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const availability = await Availability.findById(req.params.id)
      .lean()
      .exec();
    return res.status(200).json({ availability });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: err.status });
  }
});

router.post("", async (req, res) => {
  try {
    const newAvailability = await Availability.create(req.body);
    return res.status(201).json({ newAvailability });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: err.status });
  }
});

module.exports = router;
