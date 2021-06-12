const express = require('express');
const router = express.Router();
var request = require('request');

router.get('/api', (req, res) => res.json({ message: 'Hello from simple-mern-app backend api' }));
router.get('/api/randomimg', (req, res) => {
    request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var parsedJson = JSON.parse(body);
            var message = parsedJson['message']
            res.send({ message });
        }
    });
});

module.exports = router;