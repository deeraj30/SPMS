// src/components/Forgot_Password.js
import React from 'react';
import './Login.css';

const ForgotPassword = () => {
  return (
    <div className="login-container">
      <h2>Forgot Password</h2>
      <p>Enter your email to reset your password:</p>
      <form>
        <input type="email" placeholder="Email" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
