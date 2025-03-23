const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required'],
    trim: true
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: { 
    type: String, 
    required: [true, 'Phone number is required'],
    trim: true
  },
  subject: { 
    type: String, 
    required: [true, 'Subject is required'],
    trim: true
  },
  message: { 
    type: String, 
    required: [true, 'Message is required'],
    trim: true
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'resolved'],
    default: 'pending'
  }
});

// Add index for better query performance
contactSchema.index({ createdAt: -1 });
contactSchema.index({ email: 1 });
contactSchema.index({ status: 1 });

module.exports = mongoose.model('Contact', contactSchema);
