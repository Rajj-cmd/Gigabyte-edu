const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const Registration = require('../models/Registration');
const { verifyConnection, testEmail, sendNotificationEmail } = require('../utils/email');

// Test routes
router.get('/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Test email connection
router.get('/test-email-connection', async (req, res) => {
  try {
    const isConnected = await verifyConnection();
    res.json({ 
      message: 'Email connection successful',
      status: isConnected 
    });
  } catch (error) {
    console.error('Email connection error:', error);
    res.status(500).json({ 
      error: error.message,
      details: error.toString() 
    });
  }
});

// Test sending email
router.post('/test-email', async (req, res) => {
  try {
    console.log('Starting test email...');
    const result = await testEmail();
    console.log('Test email result:', result);
    res.json({ 
      message: 'Test email sent successfully',
      messageId: result.messageId 
    });
  } catch (error) {
    console.error('Test email error:', error);
    res.status(500).json({ 
      error: error.message,
      details: error.toString() 
    });
  }
});

// Contact form submission with detailed logging
router.post('/contact', async (req, res) => {
  try {
    console.log('Processing contact form submission:', req.body);
    
    // Save to database
    const contact = new Contact(req.body);
    const savedContact = await contact.save();
    console.log('Saved contact to database:', savedContact._id);

    // Send email notification
    console.log('Sending contact email notification...');
    await sendNotificationEmail(req.body, 'contact');
    console.log('Contact email notification sent successfully');

    res.status(201).json({ 
      message: 'Contact form submitted successfully',
      contactId: savedContact._id 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      message: 'Error submitting form', 
      error: error.message 
    });
  }
});

// Registration form submission
router.post('/register', async (req, res) => {
  try {
    console.log('Processing registration submission:', req.body);
    
    // Save to database
    const registration = new Registration(req.body);
    const savedRegistration = await registration.save();
    console.log('Saved registration to database:', savedRegistration._id);

    // Send email notification
    console.log('Sending registration email notification...');
    await sendNotificationEmail(req.body, 'registration');
    console.log('Registration email notification sent successfully');

    res.status(201).json({ 
      message: 'Registration submitted successfully',
      registrationId: savedRegistration._id 
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      message: 'Error submitting registration', 
      error: error.message 
    });
  }
});

module.exports = router;
