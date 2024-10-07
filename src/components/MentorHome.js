// src/components/MentorHome.js
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './MentorHome.css';

const MentorHome = () => {
  const [mentorProfile, setMentorProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve mentor profile data from localStorage
    const storedProfile = JSON.parse(localStorage.getItem('mentorProfile'));
    if (storedProfile) {
      setMentorProfile(storedProfile);
    }
  }, []);

  const handleLogout = () => {
    // Clear the local storage and redirect to the login page
    localStorage.removeItem('mentorProfile');
    navigate('/mentor-login');
  };

  const handleMentorLogin = () => {
    // Navigate to the Mentor Login page
    navigate('/mentor-login');
  };

  return (
    <div className="mentor-home-container">
      <header className="navbar">
        <div className="left-side">
          <h1>Assignment Management System</h1>
        </div>
        <div className="right-side">
          <div className="mentor-info">
            <img
              src="/path/to/mentor-photo.jpg" // Replace with actual image path
              alt="Mentor"
              className="mentor-photo"
            />
            <span className="mentor-name">{mentorProfile.name}</span>
          </div>
          <div className="buttons">
            <button className="profile-button" onClick={() => navigate('/mentor-profile')}>Profile</button>
            <button className="logout-button" onClick={handleLogout}>Log Out</button>
            <button className="login-button" onClick={handleMentorLogin}>Mentor Login</button> {/* New Mentor Login button */}
          </div>
        </div>
      </header>

      {/* Center Navbar */}
      <nav className="center-navbar">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/students-list">Students List</Link></li>
          <li><Link to="/submissions">Submissions</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
          <li><Link to="/milestones">Milestones</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default MentorHome;
