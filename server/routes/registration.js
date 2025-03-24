const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');
const { sendNotificationEmail } = require('../utils/email');

router.post('/', async (req, res) => {
  try {
    // Save to database
    const registration = new Registration(req.body);
    await registration.save();

    // Send email notification
    await sendNotificationEmail(req.body, 'registration');

    res.status(201).json({ message: 'Registration submitted successfully' });
  } catch (error) {
    console.error('Registration submission error:', error);
    res.status(500).json({ 
      message: 'Error submitting registration', 
      error: error.message 
    });
  }
});

router.get('/list', async (req, res) => {
  try {
    const registrations = await Registration.find()
      .sort({ createdAt: -1 })
      .limit(100);
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching registrations', error: error.message });
  }
});

module.exports = router;
