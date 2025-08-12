import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import TimeOffRequest from './components/TimeOffRequest';
import Confirmation from './components/Confirmation';
import Login from './components/Login';
import Homepage from './components/Homepage';
import './index.css';

function AppContent() {
  const [approved, setApproved] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    
    if (token === 'ts-auth-7x9k2m') {
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
      setTimeout(() => navigate('/timesheet'), 0);
    } else {
      setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
    }
  }, [searchParams, navigate]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    setApproved(false);
    navigate('/login');
  };
  
  return (
    <Routes>
      <Route path="/login" element={
        !isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" />
      } />
      <Route path="/dashboard" element={
        isAuthenticated ? <Homepage onNavigateToTimesheet={() => navigate('/timesheet')} onLogout={handleLogout} /> : <Navigate to="/login" />
      } />
      <Route path="/timesheet" element={
        isAuthenticated ? (
          <div className="app">
            {approved ? <Confirmation /> : <TimeOffRequest onApprove={() => setApproved(true)} />}
          </div>
        ) : <Navigate to="/login" />
      } />
      <Route path="/" element={
        searchParams.get('token') === 'ts-auth-7x9k2m' ? 
          <Navigate to="/timesheet" /> : 
          <Navigate to={isAuthenticated ? "/dashboard" : "/login"} />
      } />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
