const express = require('express');
const router = express.Router();

// Example MongoDB model (replace with your own)
const Appointment = require('../models/Appointment');

// Endpoint to create a new appointment
router.post('/', async (req, res) => {
  try {
    const { studentName, date, time } = req.body;

    // Validate input
    if (!studentName || !date || !time) {
      return res.status(400).json({ error: 'Incomplete appointment details' });
    }

    // Create a new appointment
    const newAppointment = new Appointment({
      studentName,
      date,
      time,
    });

    // Save to the database
    await newAppointment.save();

    return res.status(201).json(newAppointment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to get all appointments
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    return res.json(appointments);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add additional endpoints for updating and deleting appointments

module.exports = router;
