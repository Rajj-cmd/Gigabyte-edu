const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  country: { type: String, required: true },
  program: { type: String, required: true },
  university: { type: String, required: true },
  message: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Registration', registrationSchema);
