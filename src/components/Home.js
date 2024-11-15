// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="project-title">Student Group Project Management System</h1>
        <div className="login-links">
          <Link to="/student-login" className="login-button">Student Login</Link>
          <Link to="/mentor-login" className="login-button">Mentor Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
