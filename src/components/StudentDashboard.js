import React from 'react';
import './StudentDashboard.css';

function StudentDashboard() {
    return (
        <div className="student-dashboard">
            <h1>Student Dashboard</h1>
            <div className="dashboard-content">
                <div className="dashboard-section">
                    <h2>Projects</h2>
                    <p>View and manage your ongoing projects.</p>
                </div>
                <div className="dashboard-section">
                    <h2>Submissions</h2>
                    <p>Check the status of your submissions.</p>
                </div>
                <div className="dashboard-section">
                    <h2>Notifications</h2>
                    <p>Stay updated with the latest announcements.</p>
                </div>
                <div className="dashboard-section">
                    <h2>Milestones</h2>
                    <p>Track your progress and achievements.</p>
                </div>
            </div>
        </div>
    );
}

export default StudentDashboard;
