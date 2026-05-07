const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // 1. Import the config
const scrapeTopStories = require('./services/scraper');

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

scrapeTopStories();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));