const express = require("express");

const userController = require("./Controllers/users.controllers");
const appointmentController = require("./Controllers/appointment.controllers");
const doctorController = require("./Controllers/doctor.controllers");
const specialityController = require("./Controllers/speciality.controllers");
const availabilityController = require("./Controllers/availability.controllers");
const clinicController = require("./Controllers/clinic.controllers");
const slotController = require("./Controllers/slot.controllers");
const app = express();
app.use(express.json());

app.use("/users", userController);
app.use("/appointments", appointmentController);
app.use("/doctors", doctorController);
app.use("/specialities", specialityController);
app.use("/availabilities", availabilityController);
app.use("/clinics", clinicController);
app.use("/slots", slotController);
module.exports = app;
