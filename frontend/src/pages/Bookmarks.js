import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Bookmarks = () => {
  const [bookmarkedStories, setBookmarkedStories] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        // This assumes your backend returns the user's specific bookmarked stories
        const res = await axios.get('http://localhost:5000/api/stories/bookmarks', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBookmarkedStories(res.data);
      } catch (err) {
        console.error("Error fetching bookmarks", err);
      }
    };
    fetchBookmarks();
  }, [token]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Saved Stories</h2>
      {bookmarkedStories.length > 0 ? (
        bookmarkedStories.map(story => (
          <div key={story._id} style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px' }}>
            <a href={story.url} target="_blank" rel="noreferrer"><h3>{story.title}</h3></a>
            <p>By {story.author} | {story.points} points</p>
          </div>
        ))
      ) : (
        <p>No bookmarks saved yet.</p>
      )}
    </div>
  );
};

export default Bookmarks;