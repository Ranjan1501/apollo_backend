const Clinic = require("../Models/clinic.models");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const clinics = await Clinic.find().lean().exec();
    return res.status(200).json({ clinics });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: err.status });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const clinic = await Clinic.findById(req.params.id).lean().exec();
    return res.status(200).json({ clinic });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: err.status });
  }
});

router.post("", async (req, res) => {
  try {
    const newClinic = await Clinic.create(req.body);
    return res.status(201).json({ newClinic });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: err.status });
  }
});

module.exports = router;
