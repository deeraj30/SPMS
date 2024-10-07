import React from 'react';
import './Notifications.css';

function Notifications() {
    const notifications = [
        { id: 1, message: "New Assignment uploaded by your mentor." },
        { id: 2, message: "Your project has been graded." },
        { id: 3, message: "Upcoming deadline for Assignment 3." }
    ];

    return (
        <div className="notifications-container">
            <h1>Notifications</h1>
            <ul className="notification-list">
                {notifications.map(notification => (
                    <li key={notification.id}>
                        {notification.message}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Notifications;
