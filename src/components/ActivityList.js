import React from 'react';
import './ActivityList.css';

function ActivityList() {
    const activities = {
        todo: [
            { id: 1, title: "Java Project", description: "Start working on the Java backend development." },
            { id: 2, title: "Python AI Model", description: "Research and design the AI model using Python." }
        ],
        inProgress: [
            { id: 3, title: "React Frontend", description: "Collaborating on the frontend design with React." }
        ],
        done: [
            { id: 4, title: "Database Design", description: "Completed the database schema design for the project." },
            { id: 5, title: "Spring Boot API", description: "Finished developing the REST API using Spring Boot." }
        ]
    };

    return (
        <div className="kanban-container">
            <h1>Activity List</h1>
            <div className="kanban-board">
                <div className="kanban-column todo">
                    <h2>TO DO</h2>
                    {activities.todo.map(activity => (
                        <div key={activity.id} className="kanban-card">
                            <h3>{activity.title}</h3>
                            <p>{activity.description}</p>
                        </div>
                    ))}
                </div>

                <div className="kanban-column in-progress">
                    <h2>IN PROGRESS</h2>
                    {activities.inProgress.map(activity => (
                        <div key={activity.id} className="kanban-card">
                            <h3>{activity.title}</h3>
                            <p>{activity.description}</p>
                        </div>
                    ))}
                </div>

                <div className="kanban-column done">
                    <h2>DONE</h2>
                    {activities.done.map(activity => (
                        <div key={activity.id} className="kanban-card">
                            <h3>{activity.title}</h3>
                            <p>{activity.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ActivityList;
