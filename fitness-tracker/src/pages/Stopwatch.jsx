import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Stopwatch.css'

export default function Stopwatch({ user, onLogout }) {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [laps, setLaps] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    const milliseconds = Math.floor((ms % 1000) / 10)

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`
  }

  const handleStart = () => {
    setIsRunning(true)
  }

  const handlePause = () => {
    setIsRunning(false)
  }

  const handleLap = () => {
    setLaps([...laps, time])
  }

  const handleReset = () => {
    setTime(0)
    setIsRunning(false)
    setLaps([])
  }

  const handleLogout = () => {
    onLogout()
    navigate('/login')
  }

  return (
    <div className="stopwatch-container">
      <header className="navbar">
        <div className="navbar-content">
          <h1>⏱️ Stopwatch</h1>
          <div className="navbar-links">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/calorie-tracker" className="nav-link">Calorie Tracker</Link>
            <span className="user-name">Welcome, {user?.name}!</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </header>

      <main className="stopwatch-content">
        <div className="stopwatch-card">
          <div className="timer-display">
            {formatTime(time)}
          </div>

          <div className="controls">
            {!isRunning ? (
              <button onClick={handleStart} className="btn btn-start">Start</button>
            ) : (
              <button onClick={handlePause} className="btn btn-pause">Pause</button>
            )}
            <button onClick={handleLap} className="btn btn-lap">Lap</button>
            <button onClick={handleReset} className="btn btn-reset">Reset</button>
          </div>

          <div className="laps-section">
            <h2>Laps ({laps.length})</h2>
            {laps.length > 0 ? (
              <ul className="laps-list">
                {laps.map((lap, index) => (
                  <li key={index}>
                    <span className="lap-number">Lap {index + 1}</span>
                    <span className="lap-time">{formatTime(lap)}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="no-laps">No laps recorded yet</p>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
