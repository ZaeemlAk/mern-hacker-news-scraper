# Full-Stack Hacker News Scraper (MERN)

A mini full-stack application that automatically scrapes the top 10 stories from Y Combinator's Hacker News, stores them in MongoDB, and allows users to bookmark stories via a secure authenticated interface.

## Features

- **Automated Scraper:** Fetches top 10 stories using Cheerio on server start.
- **RESTful API:** Clean API endpoints for stories and user authentication.
- **JWT Authentication:** Secure registration and login flow.
- **Interactive Frontend:** Built with React, featuring a global Auth state via Context API.
- **Protected Routes:** Only logged-in users can access the Bookmarks page.
- **Persistence:** Bookmarks are stored in MongoDB and synced across sessions.

---

## Tech Stack

- **Frontend:** React.js, React Router, Axios, Context API
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Mongoose ODM)
- **Scraping:** Axios & Cheerio
- **Security:** JWT (JSON Web Tokens), Bcrypt.js

---

##  Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas Account
- Git

---

##  Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd mern-hacker-news
