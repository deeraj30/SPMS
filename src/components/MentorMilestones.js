// src/components/MentorMilestones.js
import React from 'react';
import './MentorMilestones.css';

const MentorMilestones = () => {
  const milestones = [
    { title: 'Project Kickoff', date: '2024-09-15' },
    { title: 'Mid Review', date: '2024-10-30' },
    // Add more milestones as necessary
  ];

  return (
    <div className="mentor-milestones-container">
      <h2>Milestones</h2>
      <ul>
        {milestones.map((milestone, index) => (
          <li key={index}>
            {milestone.title} - {milestone.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorMilestones;
