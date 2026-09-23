import React, { useState } from 'react'
import './CalorieTracker.css'

function CalorieTracker() {
  const [dailyGoal, setDailyGoal] = useState(2000)
  const [foods, setFoods] = useState([])
  const [foodName, setFoodName] = useState('')
  const [calories, setCalories] = useState('')
  const [editingId, setEditingId] = useState(null)

  const totalCalories = foods.reduce((sum, food) => sum + food.calories, 0)
  const remainingCalories = dailyGoal - totalCalories
  const caloriePercentage = (totalCalories / dailyGoal) * 100

  const handleAddFood = (e) => {
    e.preventDefault()
    
    if (!foodName.trim() || !calories.trim()) {
      alert('Please enter food name and calories')
      return
    }

    const cal = parseInt(calories, 10)
    if (cal <= 0) {
      alert('Calories must be a positive number')
      return
    }

    if (editingId !== null) {
      setFoods(foods.map(food => 
        food.id === editingId 
          ? { ...food, name: foodName, calories: cal }
          : food
      ))
      setEditingId(null)
    } else {
      const newFood = {
        id: Date.now(),
        name: foodName,
        calories: cal,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setFoods([...foods, newFood])
    }

    setFoodName('')
    setCalories('')
  }

  const handleDeleteFood = (id) => {
    setFoods(foods.filter(food => food.id !== id))
    setEditingId(null)
  }

  const handleEditFood = (food) => {
    setFoodName(food.name)
    setCalories(food.calories.toString())
    setEditingId(food.id)
  }

  const handleChangeDailyGoal = (e) => {
    const goal = parseInt(e.target.value, 10)
    if (goal > 0) {
      setDailyGoal(goal)
    }
  }

  return (
    <div className="calorie-container">
      <div className="calorie-progress">
        <h2>Daily Calorie Intake</h2>
        
        <div className="goal-settings">
          <label>Daily Goal (kcal):</label>
          <input 
            type="number" 
            value={dailyGoal}
            onChange={handleChangeDailyGoal}
            min="500"
            max="10000"
          />
        </div>

        <div className="progress-section">
          <div className="progress-bar">
            <div 
              className={`progress-fill ${caloriePercentage > 100 ? 'over' : ''}`}
              style={{ width: `${Math.min(caloriePercentage, 100)}%` }}
            >
              <span className="progress-text">
                {totalCalories} / {dailyGoal} kcal
              </span>
            </div>
          </div>
          
          <div className="calorie-stats">
            <div className={`stat-item ${remainingCalories < 0 ? 'negative' : 'positive'}`}>
              <span className="stat-label">Consumed</span>
              <span className="stat-value">{totalCalories}</span>
            </div>
            <div className={`stat-item ${remainingCalories < 0 ? 'negative' : 'positive'}`}>
              <span className="stat-label">Remaining</span>
              <span className="stat-value">{remainingCalories}</span>
            </div>
            <div className={`stat-item ${caloriePercentage > 100 ? 'negative' : 'positive'}`}>
              <span className="stat-label">Percentage</span>
              <span className="stat-value">{Math.round(caloriePercentage)}%</span>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleAddFood} className="food-form">
        <h3>{editingId ? 'Edit Food' : 'Add Food'}</h3>
        <div className="form-row">
          <input
            type="text"
            placeholder="Food name"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            min="0"
          />
          <button type="submit" className="btn-add">
            {editingId ? 'Update' : 'Add'}
          </button>
          {editingId && (
            <button 
              type="button" 
              className="btn-cancel"
              onClick={() => {
                setEditingId(null)
                setFoodName('')
                setCalories('')
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="foods-list">
        <h3>Today's Foods</h3>
        {foods.length === 0 ? (
          <p className="empty-message">No foods added yet. Start tracking!</p>
        ) : (
          <div className="food-items">
            {foods.map((food) => (
              <div key={food.id} className="food-item">
                <div className="food-info">
                  <div className="food-name">{food.name}</div>
                  <div className="food-time">{food.time}</div>
                </div>
                <div className="food-calories">{food.calories} kcal</div>
                <div className="food-actions">
                  <button 
                    className="btn-edit"
                    onClick={() => handleEditFood(food)}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn-delete"
                    onClick={() => handleDeleteFood(food.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CalorieTracker
