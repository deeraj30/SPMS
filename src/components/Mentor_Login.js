import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const MentorLogin = () => {
  const [mentorID, setMentorID] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const mentors = [
    { id: 'J. SURYA KIRAN', name: 'J. SURYA KIRAN' },
    { id: 'R.M. BALAJEE', name: 'R.M. BALAJEE' },
    { id: 'P.V. VARA PRASAD', name: 'P.V. VARA PRASAD' },
    { id: 'DINESH KUMAR ANGURAJ', name: 'DINESH KUMAR ANGURAJ' },
    { id: 'MOHAMMAD GOUSE', name: 'MOHAMMAD GOUSE' },
    { id: 'CHITTIBABU RAVELA', name: 'CHITTIBABU RAVELA' },
    { id: 'DR. G RAMA KOTESWARA RAO', name: 'DR. G RAMA KOTESWARA RAO' },
    { id: 'TALLURI JYOTHI', name: 'TALLURI JYOTHI' },
    { id: 'DR.ANITHA PRADHAN', name: 'DR.ANITHA PRADHAN' },
    { id: 'CH LAVANYA SUSANNA', name: 'CH LAVANYA SUSANNA' },
    { id: 'B. SUNEETHA', name: 'B. SUNEETHA' },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Check if entered Mentor ID and Password match any mentor
    const mentor = mentors.find(m => m.id === mentorID);
    
    if (mentor && password === mentorID) { // Assuming password is same as Mentor ID
      // Login successful, navigate to mentor dashboard or perform login actions
      alert('Login successful!');
      navigate('/mentor-home'); // Redirect to Mentor Home Page
    } else {
      alert('Invalid Mentor ID or Password!');
    }
  };

  const goToHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="login-container">
      <h2>Mentor Login</h2>
      <form onSubmit={handleLogin}>
        <select 
          value={mentorID} 
          onChange={(e) => setMentorID(e.target.value)} 
          required
        >
          <option value="" disabled>Select Mentor ID</option> {/* Default option */}
          {mentors.map((mentor) => (
            <option key={mentor.id} value={mentor.id}>
              {mentor.name}
            </option>
          ))}
        </select>

        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>

      <button onClick={goToHome} className="home-button">
        Go to Home
      </button>
    </div>
  );
};

export default MentorLogin;
