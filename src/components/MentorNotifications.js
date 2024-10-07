// src/components/MentorNotifications.js
import React from 'react';
import './MentorNotifications.css';

const MentorNotifications = () => {
  const notifications = [
    'Student A has submitted the project.',
    'Student B has requested feedback.',
    // Add more notifications as necessary
  ];

  return (
    <div className="mentor-notifications-container">
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default MentorNotifications;
