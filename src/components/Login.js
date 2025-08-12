import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === 'admin' && credentials.password === 'password') {
      localStorage.setItem('isAuthenticated', 'true');
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <img src="../utils/workforce-logo.png" alt="Workforce Suite Logo" className="login-logo" />
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Workforce Suite Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({...credentials, username: e.target.value})}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({...credentials, password: e.target.value})}
          required
        />
        <button type="submit">Login</button>
          <p className="demo-creds">Forgot Password</p>
        </form>
      </div>
    </div>
  );
};

export default Login;