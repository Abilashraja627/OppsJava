import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './CalorieTracker.css'

const FOOD_DATABASE = [
  { name: 'Apple', calories: 95, category: 'Fruits' },
  { name: 'Banana', calories: 105, category: 'Fruits' },
  { name: 'Orange', calories: 62, category: 'Fruits' },
  { name: 'Chicken Breast (100g)', calories: 165, category: 'Protein' },
  { name: 'Fish (100g)', calories: 120, category: 'Protein' },
  { name: 'Eggs', calories: 155, category: 'Protein' },
  { name: 'Rice (1 cup)', calories: 205, category: 'Grains' },
  { name: 'Bread (1 slice)', calories: 80, category: 'Grains' },
  { name: 'Pasta (1 cup)', calories: 220, category: 'Grains' },
  { name: 'Milk (1 cup)', calories: 149, category: 'Dairy' },
  { name: 'Yogurt', calories: 100, category: 'Dairy' },
  { name: 'Cheese', calories: 115, category: 'Dairy' },
  { name: 'Pizza Slice', calories: 285, category: 'Fast Food' },
  { name: 'Burger', calories: 354, category: 'Fast Food' },
  { name: 'French Fries', calories: 365, category: 'Fast Food' },
]

export default function CalorieTracker({ user, onLogout }) {
  const [meals, setMeals] = useState([])
  const [selectedFood, setSelectedFood] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [mealType, setMealType] = useState('breakfast')
  const [filterCategory, setFilterCategory] = useState('All')
  const navigate = useNavigate()

  const handleLogout = () => {
    onLogout()
    navigate('/login')
  }

  const addMeal = () => {
    if (!selectedFood) {
      alert('Please select a food item')
      return
    }

    const food = FOOD_DATABASE.find(f => f.name === selectedFood)
    const totalCalories = food.calories * quantity

    const newMeal = {
      id: Date.now(),
      name: selectedFood,
      calories: totalCalories,
      quantity,
      type: mealType,
      time: new Date().toLocaleTimeString(),
    }

    setMeals([...meals, newMeal])
    setSelectedFood('')
    setQuantity(1)
  }

  const deleteMeal = (id) => {
    setMeals(meals.filter(meal => meal.id !== id))
  }

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0)
  const breakfastCalories = meals.filter(m => m.type === 'breakfast').reduce((sum, m) => sum + m.calories, 0)
  const lunchCalories = meals.filter(m => m.type === 'lunch').reduce((sum, m) => sum + m.calories, 0)
  const dinnerCalories = meals.filter(m => m.type === 'dinner').reduce((sum, m) => sum + m.calories, 0)
  const snackCalories = meals.filter(m => m.type === 'snack').reduce((sum, m) => sum + m.calories, 0)

  const filteredFoods = filterCategory === 'All' 
    ? FOOD_DATABASE 
    : FOOD_DATABASE.filter(f => f.category === filterCategory)

  const categories = ['All', ...new Set(FOOD_DATABASE.map(f => f.category))]

  const mealsByType = {
    breakfast: meals.filter(m => m.type === 'breakfast'),
    lunch: meals.filter(m => m.type === 'lunch'),
    dinner: meals.filter(m => m.type === 'dinner'),
    snack: meals.filter(m => m.type === 'snack'),
  }

  return (
    <div className="calorie-tracker-container">
      <header className="navbar">
        <div className="navbar-content">
          <h1>🍎 Calorie Tracker</h1>
          <div className="navbar-links">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/stopwatch" className="nav-link">Stopwatch</Link>
            <span className="user-name">Welcome, {user?.name}!</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </header>

      <main className="tracker-content">
        <div className="tracker-grid">
          <div className="add-meal-section">
            <h2>Add Meal</h2>
            <div className="form-group">
              <label>Meal Type</label>
              <select value={mealType} onChange={(e) => setMealType(e.target.value)} className="select-input">
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
              </select>
            </div>

            <div className="form-group">
              <label>Filter by Category</label>
              <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="select-input">
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Select Food</label>
              <select 
                value={selectedFood} 
                onChange={(e) => setSelectedFood(e.target.value)} 
                className="select-input"
              >
                <option value="">-- Choose a food --</option>
                {filteredFoods.map(food => (
                  <option key={food.name} value={food.name}>
                    {food.name} ({food.calories} cal)
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Quantity</label>
              <input 
                type="number" 
                min="1" 
                value={quantity} 
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="number-input"
              />
            </div>

            <button onClick={addMeal} className="btn-add">Add Meal</button>
          </div>

          <div className="stats-section">
            <div className="total-calories-card">
              <h3>Today's Calories</h3>
              <div className="total-value">{totalCalories}</div>
              <p className="goal-info">Daily Goal: 2000 cal</p>
              <div className="progress-bar">
                <div className="progress" style={{width: `${Math.min((totalCalories / 2000) * 100, 100)}%`}}></div>
              </div>
              <p className="remaining">{Math.max(0, 2000 - totalCalories)} cal remaining</p>
            </div>

            <div className="meals-breakdown">
              <h3>Breakdown by Meal</h3>
              <div className="breakdown-item">
                <span>🌅 Breakfast</span>
                <span className="breakdown-value">{breakfastCalories} cal</span>
              </div>
              <div className="breakdown-item">
                <span>🌞 Lunch</span>
                <span className="breakdown-value">{lunchCalories} cal</span>
              </div>
              <div className="breakdown-item">
                <span>🌙 Dinner</span>
                <span className="breakdown-value">{dinnerCalories} cal</span>
              </div>
              <div className="breakdown-item">
                <span>🍪 Snacks</span>
                <span className="breakdown-value">{snackCalories} cal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="meals-list-section">
          <h2>Your Meals</h2>
          {meals.length === 0 ? (
            <p className="no-meals">No meals added yet. Start by adding your first meal!</p>
          ) : (
            <div className="meals-by-type">
              {Object.entries(mealsByType).map(([type, typeMeals]) => (
                typeMeals.length > 0 && (
                  <div key={type} className="meal-type-group">
                    <h3>{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
                    <div className="meals-grid">
                      {typeMeals.map(meal => (
                        <div key={meal.id} className="meal-card">
                          <div className="meal-header">
                            <span className="meal-name">{meal.name}</span>
                            <button 
                              onClick={() => deleteMeal(meal.id)}
                              className="btn-delete"
                            >
                              ✕
                            </button>
                          </div>
                          <p className="meal-info">Qty: {meal.quantity}x</p>
                          <p className="meal-calories">{meal.calories} cal</p>
                          <p className="meal-time">{meal.time}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
