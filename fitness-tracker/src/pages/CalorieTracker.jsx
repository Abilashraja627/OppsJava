import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CalorieTracker.css';

export default function CalorieTracker({ user, onLogout }) {
  const [foods, setFoods] = useState([]);
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const commonFoods = [
    { name: 'Apple', calories: 95 },
    { name: 'Banana', calories: 105 },
    { name: 'Chicken Breast', calories: 165 },
    { name: 'Egg', calories: 78 },
    { name: 'Rice (1 cup cooked)', calories: 206 },
    { name: 'Bread (1 slice)', calories: 79 },
    { name: 'Milk (1 cup)', calories: 149 },
    { name: 'Yogurt', calories: 100 },
    { name: 'Salmon', calories: 280 },
    { name: 'Broccoli (1 cup)', calories: 55 },
    { name: 'Pizza Slice', calories: 285 },
    { name: 'Burger', calories: 354 },
    { name: 'Coffee', calories: 2 },
    { name: 'Orange Juice', calories: 112 },
  ];

  const handleAddFood = (e) => {
    e.preventDefault();
    setError('');

    if (!foodName || !calories) {
      setError('Please fill in all fields');
      return;
    }

    const calValue = parseFloat(calories);
    if (isNaN(calValue) || calValue <= 0) {
      setError('Calories must be a valid positive number');
      return;
    }

    const newFood = {
      id: Date.now(),
      name: foodName,
      calories: calValue,
      date: date,
    };

    setFoods([...foods, newFood]);
    setFoodName('');
    setCalories('');
  };

  const handleDeleteFood = (id) => {
    setFoods(foods.filter(food => food.id !== id));
  };

  const handleAddQuickFood = (food) => {
    const newFood = {
      id: Date.now(),
      name: food.name,
      calories: food.calories,
      date: date,
    };
    setFoods([...foods, newFood]);
  };

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  const getTotalCalories = () => {
    return foods.reduce((total, food) => total + food.calories, 0).toFixed(1);
  };

  const getDailyCalories = () => {
    return foods
      .filter(food => food.date === date)
      .reduce((total, food) => total + food.calories, 0)
      .toFixed(1);
  };

  return (
    <div className="calorie-container">
      <div className="header">
        <div className="user-info">
          <span>Welcome, {user?.name}!</span>
        </div>
        <div className="nav-buttons">
          <button onClick={() => navigate('/dashboard')} className="nav-btn">Dashboard</button>
          <button onClick={() => navigate('/stopwatch')} className="nav-btn">Stopwatch</button>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </div>

      <div className="calorie-content">
        <h1>Calorie Tracker</h1>

        <div className="stats-section">
          <div className="stat-card">
            <div className="stat-label">Today's Calories</div>
            <div className="stat-value">{getDailyCalories()}</div>
            <div className="stat-unit">kcal</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Total Calories</div>
            <div className="stat-value">{getTotalCalories()}</div>
            <div className="stat-unit">kcal</div>
          </div>
        </div>

        <div className="main-content">
          <div className="add-food-section">
            <h2>Add Food</h2>
            
            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleAddFood}>
              <div className="form-row">
                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Food Name</label>
                  <input
                    type="text"
                    value={foodName}
                    onChange={(e) => setFoodName(e.target.value)}
                    placeholder="Enter food name"
                  />
                </div>
                <div className="form-group">
                  <label>Calories</label>
                  <input
                    type="number"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                    placeholder="Enter calories"
                  />
                </div>
              </div>
              <button type="submit" className="btn-add">Add Food</button>
            </form>

            <div className="quick-foods">
              <h3>Quick Add</h3>
              <div className="quick-food-grid">
                {commonFoods.map((food, index) => (
                  <button
                    key={index}
                    className="quick-food-btn"
                    onClick={() => handleAddQuickFood(food)}
                    title={`${food.calories} kcal`}
                  >
                    {food.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="foods-list-section">
            <h2>Food Log</h2>
            {foods.length === 0 ? (
              <div className="no-foods">No foods added yet</div>
            ) : (
              <div className="foods-list">
                {foods
                  .sort((a, b) => new Date(b.date) - new Date(a.date) || b.id - a.id)
                  .map(food => (
                    <div key={food.id} className="food-item">
                      <div className="food-info">
                        <div className="food-name">{food.name}</div>
                        <div className="food-date">{new Date(food.date).toLocaleDateString()}</div>
                      </div>
                      <div className="food-calories">{food.calories} kcal</div>
                      <button
                        className="btn-delete"
                        onClick={() => handleDeleteFood(food.id)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
