const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  title: String,
  url: String,
  points: { type: Number, default: 0 },
  author: String,
  postedAt: String,
  storyId: { type: String, unique: true }
});

module.exports = mongoose.model('Story', storySchema);