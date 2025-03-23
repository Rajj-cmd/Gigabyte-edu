const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

router.post('/', async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();
    res.status(201).json({ message: 'Registration submitted successfully' });
  } catch (error) {
    console.error('Registration submission error:', error);
    res.status(500).json({ message: 'Error submitting registration', error: error.message });
  }
});

module.exports = router;
