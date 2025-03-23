const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { sendNotificationEmail } = require('../utils/email');

router.post('/', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    await sendNotificationEmail(req.body, 'contact');
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ message: 'Error submitting form', error: error.message });
  }
});

module.exports = router;