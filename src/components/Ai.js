// src/components/Ai.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Ai.css'; // Import the CSS file
import aiImage from '../assets/ai.png'; // Import the image

const Ai = () => {
  return (
    <div className="ai-project-container">
      <h2>AI Chatbot Development</h2>

      {/* Add the image here */}
      <img src={aiImage} alt="AI Project" className="project-image" />

      <p>
        "Building smart, conversational agents to enhance customer experience."
      </p>

      <h3>Project Highlights:</h3>
      <ul>
        <li>"Natural language understanding at the core."</li>
        <li>"Seamless integration with customer platforms."</li>
        <li>"Fast, accurate responses to user queries."</li>
      </ul>

      <h3>Status:</h3>
      <p>
        <strong>In Progress</strong> | Deadline: <strong>2024-10-20</strong>
      </p>

      <h3>Team:</h3>
      <ul>
        <li>Vivek</li>
        <li>Athreya</li>
      </ul>

      <Link to="/mentor-dashboard" className="back-to-dashboard">Back to Mentor Dashboard</Link>
    </div>
  );
};

export default Ai;
