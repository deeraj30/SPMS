// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import StudentLogin from './components/Student_Login';
import MentorLogin from './components/Mentor_Login';
import ForgotPassword from './components/Forgot_Password';
import Signup from './components/Signup';
import StudentHome from './components/StudentHome';
import StudentDashboard from './components/StudentDashboard';
import ActivityList from './components/ActivityList';
import ProjectSubmission from './components/ProjectSubmission';
import Notifications from './components/Notifications';
import MentorHome from './components/MentorHome';
import MentorDashboard from './components/MentorDashboard';
import MentorProjects from './components/MentorProjects';
import MentorStudentsList from './components/MentorStudentsList';
import MentorSubmissions from './components/MentorSubmissions';
import MentorNotifications from './components/MentorNotifications';
import MentorMilestones from './components/MentorMilestones';
import Ai from './components/Ai'; // Import Ai.js
import Cricket from './components/Cricket'; // Import Cricket.js

const App = () => {
  return (
    <Router basename="/SPMS_react_SpringBoot"> {/* Add basename for GitHub Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/mentor-login" element={<MentorLogin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student-home" element={<StudentHome />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/mentor-dashboard" element={<MentorDashboard />} />
        <Route path="/activity-list" element={<ActivityList />} />
        <Route path="/project-submission" element={<ProjectSubmission />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/mentor-home" element={<MentorHome />} />
        <Route path="/projects" element={<MentorProjects />} />
        <Route path="/students-list" element={<MentorStudentsList />} />
        <Route path="/submissions" element={<MentorSubmissions />} />
        <Route path="/mentor-notifications" element={<MentorNotifications />} /> {/* Avoid duplicate route */}
        <Route path="/milestones" element={<MentorMilestones />} />
        <Route path="/projects/cricket" element={<Cricket />} /> {/* Cricket project route */}
        <Route path="/projects/1" element={<Ai />} /> {/* AI project route */}
      </Routes>
    </Router>
  );
};

export default App;
