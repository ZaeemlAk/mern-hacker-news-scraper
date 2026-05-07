const express = require('express');
const router = express.Router();
const { getStories, triggerScrape, toggleBookmark } = require('../controllers/storyController');
const auth = require('../middleware/auth'); // <--- Importing the middleware

// Public routes
router.get('/', getStories);
router.post('/scrape', triggerScrape);

// Protected route (Notice 'auth' is passed as the second argument)
router.post('/:id/bookmark', auth, toggleBookmark);

module.exports = router;