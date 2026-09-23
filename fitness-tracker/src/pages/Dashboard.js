import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

export default function Dashboard({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="navbar">
        <div className="navbar-content">
          <h1 className="logo">FitnessTracker</h1>
          <div className="navbar-right">
            <div className="user-greeting">Welcome, {user?.name}! 👋</div>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="intro-section">
          <h2>Your Fitness Hub</h2>
          <p>Track your workouts and monitor your nutrition in one place</p>
        </div>

        <div className="features-grid">
          <div className="feature-card" onClick={() => navigate('/stopwatch')}>
            <div className="feature-icon">⏱️</div>
            <h3>Stopwatch</h3>
            <p>Track your workout time with precision. Start, stop, pause, and record lap times for different exercises.</p>
            <div className="feature-stats">
              <span>Measure Performance</span>
            </div>
          </div>

          <div className="feature-card" onClick={() => navigate('/calorie-tracker')}>
            <div className="feature-icon">🥗</div>
            <h3>Calorie Tracker</h3>
            <p>Monitor your daily calorie intake. Add foods, track nutrition, and reach your fitness goals.</p>
            <div className="feature-stats">
              <span>Manage Nutrition</span>
            </div>
          </div>
        </div>

        <div className="info-section">
          <div className="info-card">
            <h3>Getting Started</h3>
            <ul>
              <li>Use the Stopwatch to time your workouts and track performance</li>
              <li>Track your daily calorie intake with the Calorie Tracker</li>
              <li>Set fitness goals and work towards them consistently</li>
              <li>Monitor your progress over time</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Tips & Tricks</h3>
            <ul>
              <li>Record lap times during your workout for interval training</li>
              <li>Use quick add for common foods to save time</li>
              <li>Check your daily calorie summary regularly</li>
              <li>Stay consistent with tracking for better results</li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="dashboard-footer">
        <p>&copy; 2024 FitnessTracker. Your personal fitness companion.</p>
      </footer>
    </div>
  );
}
