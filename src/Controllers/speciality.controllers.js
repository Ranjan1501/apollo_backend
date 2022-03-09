const Speciality = require("../Models/speciality.models");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const specialities = await Speciality.find().lean().exec();
    return res.status(200).json({ specialities });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: err.status });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const speciality = await Speciality.findById(req.params.id).lean().exec();
    return res.status(200).json({ speciality });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: err.status });
  }
});

router.post("", async (req, res) => {
  try {
    const newSpeciality = await Speciality.create(req.body);
    return res.status(201).json({ newSpeciality });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: err.status });
  }
});

module.exports = router;
