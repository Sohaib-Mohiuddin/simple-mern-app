const express = require('express');
const router = express.Router();
var request = require('request');

const Post = require('../models/Post');

// Middleware for parsing json requests
router.use(express.json());

/* ==================== GET ENDPOINTS ==================== */
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

// Route for /api/post/retrieve
router.get('/post/retrieve', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({ message: error })
    }
});
/* ==================== GET ENDPOINTS ==================== */

/* ==================== POST ENDPOINTS ==================== */
router.post('/post/submit', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.json({ message: error });
    }
});
/* ==================== POST ENDPOINTS ==================== */

module.exports = router;