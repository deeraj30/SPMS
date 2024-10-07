// src/components/Cricket.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Cricket.css'; // Import the CSS file
import cricketImage from '../assets/cricket.jpg'; // Import the image

const Cricket = () => {
  return (
    <div className="cricket-project-container">
      <h2>Cricket Score Website</h2>

      {/* Add the image here */}
      <img src={cricketImage} alt="Cricket Project" className="project-image" />

      <p>
        "This project aims to create a dynamic website that provides live cricket scores, player statistics, and match details."
      </p>

      <h3>Project Highlights:</h3>
      <ul>
        <li>Live score updates</li>
        <li>Player statistics and profiles</li>
        <li>Match schedules and results</li>
      </ul>

      <h3>Status:</h3>
      <p>
        <strong>In Development</strong> | Deadline: <strong>2024-11-01</strong>
      </p>

      <h3>Team:</h3>
      <ul>
        <li>Surya</li>
        <li>Daya</li>
      </ul>

      <Link to="/mentor-dashboard" className="back-to-dashboard">Back to Mentor Dashboard</Link>
    </div>
  );
};

export default Cricket;
