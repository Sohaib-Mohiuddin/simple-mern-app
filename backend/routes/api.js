const express = require('express');
const router = express.Router();
var request = require('request');

// Route for /api
router.get('/', (req, res) => res.json({ message: 'Hello from simple-mern-app backend api' }));

// Route for /api/randomimg
router.get('/randomimg', (req, res) => {
    request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var parsedJson = JSON.parse(body);
            var message = parsedJson['message']
            res.send({ message });
        }
    });
});

module.exports = router;