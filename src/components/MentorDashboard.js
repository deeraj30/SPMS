// src/components/MentorDashboard.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MentorDashboard.css';

const MentorDashboard = () => {
  const [groupProjects, setGroupProjects] = useState([]);
  const [groupAssignments, setGroupAssignments] = useState([]);
  const [groupNotifications, setGroupNotifications] = useState([]);

  useEffect(() => {
    const fetchedGroupProjects = [
      { id: 1, name: 'AI Chatbot Development', status: 'In Progress', deadline: '2024-10-20', members: ['Vivek', 'Athreya'] },
      { id: 2, name: 'Cricket Score Website', status: 'Completed', deadline: '2024-09-25', members: ['Surya', 'Daya'] },
    ];
    const fetchedGroupAssignments = [
      { id: 1, title: 'Project Proposal', dueDate: '2024-10-05', submissions: 2, totalGroups: 4 },
      { id: 2, title: 'Final Report', dueDate: '2024-10-25', submissions: 0, totalGroups: 4 },
    ];
    const fetchedGroupNotifications = [
      { id: 1, message: 'New milestone added for AI Chatbot Development.', date: '2024-10-02' },
      { id: 2, message: 'Group submitted project proposal late.', date: '2024-10-01' },
    ];

    setGroupProjects(fetchedGroupProjects);
    setGroupAssignments(fetchedGroupAssignments);
    setGroupNotifications(fetchedGroupNotifications);
  }, []);

  return (
    <div className="mentor-dashboard-container">
      <h2>Mentor Dashboard</h2>

      {/* Group Project Overview */}
      <section className="group-project-overview">
        <h3>Ongoing Group Projects</h3>
        <ul>
          {groupProjects.map((project) => (
            <li key={project.id}>
              <strong>{project.name}</strong> - {project.status} (Deadline: {project.deadline})<br />
              Members: {project.members.join(', ')}
              <Link to={project.id === 2 ? '/projects/cricket' : `/projects/${project.id}`} className="view-details">View Project Details</Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Group Assignment Summary */}
      <section className="group-assignment-summary">
        <h3>Group Assignments</h3>
        <ul>
          {groupAssignments.map((assignment) => (
            <li key={assignment.id}>
              <strong>{assignment.title}</strong> - Due: {assignment.dueDate} (Submissions: {assignment.submissions}/{assignment.totalGroups})
              <Link to={`/assignments/${assignment.id}`} className="view-details">Review Submissions</Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Group Progress Tracking */}
      <section className="group-progress">
        <h3>Group and Student Progress</h3>
        <p>Track the progress of individual students and their group projects:</p>
        <Link to="/students-list" className="track-progress-button">Track Group Progress</Link>
      </section>

      {/* Notifications */}
      <section className="notifications">
        <h3>Recent Notifications</h3>
        <ul>
          {groupNotifications.map((notification) => (
            <li key={notification.id}>
              {notification.message} (Date: {notification.date})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default MentorDashboard;
