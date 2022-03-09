const User = require("../Models/users.models");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    return res.status(200).json({ users });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: err.status });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    return res.status(200).json({ user });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: err.status });
  }
});

router.post("", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    return res.status(201).json({ newUser });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: err.status });
  }
});

module.exports = router;
