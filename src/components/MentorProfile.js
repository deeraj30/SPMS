// src/components/MentorProfile.js
import React, { useEffect, useState } from 'react';
import './MentorProfile.css'; // CSS for MentorProfile

const MentorProfile = () => {
  const [mentorProfile, setMentorProfile] = useState({});

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('mentorProfile'));
    if (storedProfile) {
      setMentorProfile(storedProfile);
    }
  }, []);

  return (
    <div className="mentor-profile-container">
      <h2>Mentor Profile</h2>
      <p><strong>Name:</strong> {mentorProfile.name}</p>
      <p><strong>Course:</strong>JAVA FULL STACK WEB DEVELOPMENT</p>
      <p><strong>Students:</strong> {/* List of students here */}</p>
    </div>
  );
};

export default MentorProfile;
