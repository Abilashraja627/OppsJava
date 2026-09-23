import React, { useState, useEffect } from 'react'
import './Stopwatch.css'

function Stopwatch() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [laps, setLaps] = useState([])

  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10)
      }, 10)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const formatTime = (ms) => {
    const hours = Math.floor(ms / 3600000)
    const minutes = Math.floor((ms % 3600000) / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    const milliseconds = Math.floor((ms % 1000) / 10)

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`
  }

  const handleStart = () => {
    setIsRunning(true)
  }

  const handlePause = () => {
    setIsRunning(false)
  }

  const handleResume = () => {
    setIsRunning(true)
  }

  const handleLap = () => {
    setLaps([...laps, time])
  }

  const handleReset = () => {
    setTime(0)
    setIsRunning(false)
    setLaps([])
  }

  const getLapTime = (lapIndex) => {
    if (lapIndex === 0) return laps[0]
    return laps[lapIndex] - laps[lapIndex - 1]
  }

  return (
    <div className="stopwatch-card">
      <h2>Stopwatch</h2>
      
      <div className="stopwatch-display">
        <div className="time-display">{formatTime(time)}</div>
      </div>

      <div className="stopwatch-controls">
        {!isRunning ? (
          <>
            {time === 0 ? (
              <button onClick={handleStart} className="btn-start">
                Start
              </button>
            ) : (
              <button onClick={handleResume} className="btn-resume">
                Resume
              </button>
            )}
          </>
        ) : (
          <button onClick={handlePause} className="btn-pause">
            Pause
          </button>
        )}
        
        {time > 0 && (
          <>
            <button onClick={handleLap} className="btn-lap" disabled={!isRunning}>
              Lap
            </button>
            <button onClick={handleReset} className="btn-reset">
              Reset
            </button>
          </>
        )}
      </div>

      {laps.length > 0 && (
        <div className="laps-section">
          <h3>Lap Times</h3>
          <div className="laps-list">
            {laps.map((lap, index) => (
              <div key={index} className="lap-item">
                <span className="lap-number">Lap {index + 1}</span>
                <span className="lap-time">{formatTime(getLapTime(index))}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Stopwatch
