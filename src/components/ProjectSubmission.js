import React, { useState } from 'react';
import './ProjectSubmission.css';

function ProjectSubmission() {
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Project Submitted!");
        // Add logic for file handling and submission here.
    }

    return (
        <div className="project-submission-container">
            <h1>Submit Your Project</h1>
            <form className="submission-form" onSubmit={handleSubmit}>
                <input type="file" required />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter project description"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ProjectSubmission;
