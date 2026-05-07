const axios = require('axios');
const cheerio = require('cheerio');
const Story = require('../models/Story');

const scrapeTopStories = async () => {
  try {
    const { data } = await axios.get('https://news.ycombinator.com/');
    const $ = cheerio.load(data);
    const stories = [];

    $('.athing').slice(0, 10).each((i, el) => {
      const storyId = $(el).attr('id');
      const title = $(el).find('.titleline > a').first().text();
      const url = $(el).find('.titleline > a').first().attr('href');
      const subtext = $(el).next();
      const points = parseInt(subtext.find('.score').text()) || 0;
      const author = subtext.find('.hnuser').text() || 'Unknown';
      const postedAt = subtext.find('.age').attr('title');

      stories.push({ title, url, points, author, postedAt, storyId });
    });

    for (const story of stories) {
      await Story.findOneAndUpdate({ storyId: story.storyId }, story, { upsert: true });
    }
    return stories;
  } catch (error) {
    console.error("Scraper Error:", error);
  }
};

module.exports = scrapeTopStories;