const express = require('express');
const app = express();
const port = 5000;
const host = '0.0.0.0';
require('dotenv/config');

// MongoDB vars
const mongoose = require('mongoose'); // required for MongoDB connect
const mongoUrl = process.env.DB_URL || "NoURL"; // MUST HAVE MONGODB URL IN ENVIRONMENT VARIABLE

// Import API Routes
const apiRoutes = require('./routes/api');

// Middleware
app.use('/api', apiRoutes);
// Middleware for parsing json requests
app.use(express.json());

// MongoDB Connection
if (mongoUrl == "NoURL") {
    console.log('No Mongo URL detected. Check .env if exists for DB_URL. If not, create a .env file and add DB_URL and assign it your MongoDB connection URL!');
} else {
    mongoose.connect(
        mongoUrl,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => { console.log('Connected to DB') },
        (error) => { console.log('Add Mongo connection link to .env file. Create .env file.' + error) }
    );
}


// Listen on port and host
app.listen(port, () => {
    console.log(`Connection to backend established. Running on ${host}:${port}`);
});