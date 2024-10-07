// src/components/MentorStudentsList.js
import React from 'react';
import './MentorStudentsList.css';

const MentorStudentsList = () => {
  const students = [
    { name: 'Student A', id: '001' },
    { name: 'Student B', id: '002' },
    { name: 'Student C', id: '003' },
    // Add more students as necessary
  ];

  return (
    <div className="mentor-students-list-container">
      <h2>Students List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} (ID: {student.id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorStudentsList;
