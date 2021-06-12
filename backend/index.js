const express = require('express');
const app = express();
const port = 5000;
const host = '0.0.0.0';
require('dotenv/config');

// MongoDB vars
const mongoose = require('mongoose'); // required for MongoDB connect
const mongoUrl = process.env.DB_URL; // MUST HAVE MONGODB URL IN ENVIRONMENT VARIABLE

var request = require('request');

app.get('/api', (req, res) => res.json({ message: 'Hello from simple-mern-app backend api' }));
app.get('/api/randomimg', (req, res) => {
    request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var parsedJson = JSON.parse(body);
            var message = parsedJson['message']
            res.send({ message });
        }
    });
});

// MongoDB Connection
mongoose.connect(
    mongoUrl,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('Connected to DB')
    }
);

app.listen(port, () => {
    console.log(`Connection to backend established. Running on ${host}:${port}`)
});