const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/api');  // Changed this line

dotenv.config();
const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5000'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// API routes
app.use('/api', apiRoutes);  // Changed this line

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start server only after successful database connection
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});
