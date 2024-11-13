// src/components/StudentHome.js
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './StudentHome.css';

const StudentHome = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [studentProfile, setStudentProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user profile data from localStorage after login
    const storedProfile = JSON.parse(localStorage.getItem('studentProfile'));
    if (storedProfile) {
      setStudentProfile(storedProfile);
    }
  }, []);

  const handleLogout = () => {
    // Redirect to the login page
    navigate('/student-login');
  };

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className="student-home-container">
      <header className="navbar">
        <div className="left-side">
          <h1>Student Project Management System</h1>
        </div>
        <div className="right-side">
          <div className="student-info">
            <img
              src={studentProfile.image} // Display the uploaded image
              alt="Student"
              className="student-photo"
            />
            <span className="student-name">{studentProfile.name}</span>
          </div>
          <div className="buttons">
            <button onClick={handleProfileClick} className="profile-button">Profile</button>
            <button onClick={handleLogout} className="logout-button">Log Out</button>
          </div>
        </div>
      </header>

      {/* Navbar to display center items */}
      <nav className="center-navbar">
        <ul>
          <li><Link to="/student-dashboard">Dashboard</Link></li>
          <li><Link to="/activity-list">Activity List</Link></li>
          <li><Link to="/project-submission">Project Submission</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
        </ul>
      </nav>

      {/* Profile Information */}
      {showProfile && (
        <div className="profile-info">
          <h2>Profile Information</h2>
          <p><strong>Name:</strong> {studentProfile.name}</p>
          <p><strong>Email:</strong> {studentProfile.email}</p>
          <p><strong>Phone Number:</strong> {studentProfile.phone}</p>
          <p><strong>DOB:</strong> {studentProfile.dob}</p>
          <p><strong>Projects:</strong> {studentProfile.projects ? studentProfile.projects.join(', ') : 'No projects available'}</p> {/* Display project names */}
          <p><strong>Mentor Name:</strong> {studentProfile.mentor}</p> {/* Displays the mentor name */}
        </div>
      )}
    </div>
  );
};




export default StudentHome;
