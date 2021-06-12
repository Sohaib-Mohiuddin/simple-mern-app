const express = require('express');
const app = express();
const port = 5000;
const host = '0.0.0.0';
require('dotenv/config');

// MongoDB vars
const mongoose = require('mongoose'); // required for MongoDB connect
const mongoUrl = process.env.DB_URL; // MUST HAVE MONGODB URL IN ENVIRONMENT VARIABLE

// Import API Routes
const apiRoutes = require('./routes/api');

// Middleware
app.use('/api', apiRoutes);

// MongoDB Connection
mongoose.connect(
    mongoUrl,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log('Connected to DB') }
);

// Listen on port and host
app.listen(port, () => {
    console.log(`Connection to backend established. Running on ${host}:${port}`);
});