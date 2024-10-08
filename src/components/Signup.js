import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './Signup.css'; 

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [mentor, setMentor] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [dob, setDob] = useState(''); 
  const [projects, setProjects] = useState(''); // State for manually entering projects
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const studentProfile = {
      name,
      email,
      phone,
      mentor,
      password,
      dob,
      projects: projects.split(',').map(project => project.trim()), // Split projects by comma and trim whitespace
      image, 
    };

    localStorage.setItem('studentProfile', JSON.stringify(studentProfile));

    navigate('/student-login');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const goToLogin = () => {
    navigate('/student-login');
  };

  const goToHome = () => {
    navigate('/');
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

        <label>Select Mentor</label>
        <select value={mentor} onChange={(e) => setMentor(e.target.value)} required>
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

        {/* DOB field */}
        <label htmlFor="dob">Date of Birth</label>
        <input
          id="dob"
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />

        {/* Project Names Input */}
        <label htmlFor="projects">Enter Project Names (comma separated)</label>
        <input
          id="projects"
          type="text"
          placeholder="Enter project names separated by commas"
          value={projects}
          onChange={(e) => setProjects(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input 
          id="password"
          type="password" 
          placeholder="Enter your password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />

        <label htmlFor="image">Upload Image</label>
        <input 
          id="image"
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          required 
        />

        <button type="submit">Signup</button>
      </form>

      <div className="button-container">
        <button onClick={goToLogin} className="login-button">Go to Login</button>
        <button onClick={goToHome} className="home-button">Go to Home</button>
      </div>
    </div>
  );
};

export default Signup;
