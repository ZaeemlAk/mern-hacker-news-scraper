const Story = require('../models/Story');
const User = require('../models/User');
const scrapeTopStories = require('../services/scraper');

exports.getStories = async (req, res) => {
  const stories = await Story.find().sort({ points: -1 });
  res.json(stories);
};

exports.triggerScrape = async (req, res) => {
  await scrapeTopStories();
  res.status(200).json({ message: "Scrape successful" });
};

exports.toggleBookmark = async (req, res) => {
  const user = await User.findById(req.user.id);
  const storyId = req.params.id;

  if (user.bookmarks.includes(storyId)) {
    user.bookmarks = user.bookmarks.filter(id => id.toString() !== storyId);
  } else {
    user.bookmarks.push(storyId);
  }
  await user.save();
  res.json(user.bookmarks);
};