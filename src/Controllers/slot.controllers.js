const Slot = require("../Models/slots.models");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const slots = await Slot.find().lean().exec();
    return res.status(200).json({ slots });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: err.status });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const slot = await Slot.findById(req.params.id).lean().exec();
    return res.status(200).json({ slot });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: err.status });
  }
});

router.post("", async (req, res) => {
  try {
    const newSlot = await Slot.create(req.body);
    return res.status(201).json({ newSlot });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: err.status });
  }
});

module.exports = router;
