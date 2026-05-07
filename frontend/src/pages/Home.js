import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const [stories, setStories] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchStories = async () => {
      const res = await axios.get('http://localhost:5000/api/stories');
      setStories(res.data);
    };
    fetchStories();
  }, []);

  const toggleBookmark = async (id) => {
    try {
      await axios.post(`http://localhost:5000/api/stories/${id}/bookmark`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Bookmark status updated!');
    } catch (err) {
      alert('Please login to bookmark stories');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Top 10 Hacker News Stories</h2>
      {stories.map(story => (
        <div key={story._id} style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px' }}>
          <a href={story.url} target="_blank" rel="noreferrer"><h3>{story.title}</h3></a>
          <p>{story.points} points | Author: {story.author} | {story.postedAt}</p>
          <button onClick={() => toggleBookmark(story._id)}>
            {token ? 'Toggle Bookmark' : 'Login to Bookmark'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;