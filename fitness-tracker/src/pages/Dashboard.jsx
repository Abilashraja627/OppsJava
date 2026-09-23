import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Dashboard.css'

export default function Dashboard({ user, onLogout }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    onLogout()
    navigate('/login')
  }

  return (
    <div className="dashboard-container">
      <header className="navbar">
        <div className="navbar-content">
          <div className="logo">
            <h1>💪 Fitness Tracker</h1>
          </div>
          <div className="navbar-links">
            <span className="user-info">Welcome, {user?.name}!</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </header>

      <main className="dashboard-content">
        <div className="welcome-section">
          <h2>Welcome to Your Fitness Dashboard!</h2>
          <p>Track your workout performance and calorie intake</p>
        </div>

        <div className="features-grid">
          <Link to="/stopwatch" className="feature-card">
            <div className="feature-icon">⏱️</div>
            <h3>Stopwatch</h3>
            <p>Track your workout duration with precision timing and lap recordings</p>
          </Link>

          <Link to="/calorie-tracker" className="feature-card">
            <div className="feature-icon">🍎</div>
            <h3>Calorie Tracker</h3>
            <p>Log your meals and monitor your daily calorie intake</p>
          </Link>
        </div>

        <div className="user-stats">
          <div className="stat-card">
            <h3>Profile Information</h3>
            <div className="stat-content">
              <p><strong>Name:</strong> {user?.name}</p>
              <p><strong>Email:</strong> {user?.email}</p>
              <p><strong>Member Since:</strong> {user?.joinDate}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
