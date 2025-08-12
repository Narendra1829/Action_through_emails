import React from 'react';
import './Homepage.css';

const Homepage = ({ onNavigateToTimesheet, onLogout }) => {
  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
        <h1>Dashboard</h1>
        <button className="logout-btn" onClick={onLogout}>Logout</button>
        </div>
        <div className="actions-grid">
          <div className="action-card" onClick={onNavigateToTimesheet}>
            <img src='../utils/sunbed.png' width={40} height={40} alt="Timesheet icon" />
            <h3>Timesheet Review</h3>
            <p>Click here to review and approve timesheet modifications</p>
          </div>
        </div>       
      </div>
    </div>
  );
};

export default Homepage;