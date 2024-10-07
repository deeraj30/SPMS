import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Import the CSS file

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [mentor, setMentor] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    
    const studentProfile = {
      name,
      email,
      phone,
      mentor,
      password,
    };

    // Store student profile data in localStorage
    localStorage.setItem('studentProfile', JSON.stringify(studentProfile));

    // Redirect to login page after successful signup
    navigate('/student-login');
  };

  const goToLogin = () => {
    navigate('/student-login'); // Navigate to the login page
  };

  const goToHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignup}>
        <h2>Signup</h2>

        <label htmlFor="name">Name</label>
        <input 
          id="name"
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />

        <label htmlFor="email">Email</label>
        <input 
          id="email"
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        <label htmlFor="phone">Phone Number</label>
        <input 
          id="phone"
          type="tel" 
          placeholder="Enter your phone number" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          required 
        />

        <label htmlFor="mentor">Select Mentor</label>
        <select 
          id="mentor"
          value={mentor} 
          onChange={(e) => setMentor(e.target.value)} 
          required
        >
          <option value="" disabled>Select a mentor</option>
          <option value="J. SURYA KIRAN">J. SURYA KIRAN</option>
          <option value="R.M. BALAJEE">R.M. BALAJEE</option>
          <option value="P.V. VARA PRASAD">P.V. VARA PRASAD</option>
          <option value="DINESH KUMAR ANGURAJ">DINESH KUMAR ANGURAJ</option>
          <option value="MOHAMMAD GOUSE">MOHAMMAD GOUSE</option>
          <option value="CHITTIBABU RAVELA">CHITTIBABU RAVELA</option>
          <option value="DR. G RAMA KOTESWARA RAO">DR. G RAMA KOTESWARA RAO</option>
          <option value="TALLURI JYOTHI">TALLURI JYOTHI</option>
          <option value="DR.ANITHA PRADHAN">DR.ANITHA PRADHAN</option>
          <option value="CH LAVANYA SUSANNA">CH LAVANYA SUSANNA</option>
          <option value="B. SUNEETHA">B. SUNEETHA</option>
        </select>

        <label htmlFor="password">Password</label>
        <input 
          id="password"
          type="password" 
          placeholder="Enter your password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />

        <button type="submit">Signup</button>
      </form>
      
      <div className="button-container">
        <button onClick={goToLogin} className="login-button">Go to Login</button>
        <button onClick={goToHome} className="home-button">Go to Home</button> {/* New button for Home */}
      </div>
    </div>
  );
};

export default Signup;
