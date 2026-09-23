import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Stopwatch from './pages/Stopwatch'
import CalorieTracker from './pages/CalorieTracker'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('user') !== null)
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user')
    return storedUser ? JSON.parse(storedUser) : null
  })

  const handleLogin = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData))
    setUser(userData)
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard user={user} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/stopwatch"
          element={isAuthenticated ? <Stopwatch user={user} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/calorie-tracker"
          element={isAuthenticated ? <CalorieTracker user={user} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App
