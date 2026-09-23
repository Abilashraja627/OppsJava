# 💪 Fitness Tracker - React App

A modern, full-featured fitness tracking application built with React, featuring a stopwatch timer, calorie tracker, and user authentication system.

## Features

### 🔐 Authentication
- **Login Page**: Secure login with email and password validation
- **Signup Page**: User registration with password confirmation
- **Session Management**: User data persisted in localStorage

### ⏱️ Stopwatch
- **Start/Pause Controls**: Start and pause your workout timer
- **Lap Recording**: Track individual lap times during workouts
- **Precise Timing**: Accurate to centiseconds (00:00.00 format)
- **Reset Function**: Clear timer and lap history

### 🍎 Calorie Tracker
- **Food Database**: Pre-loaded with 15+ common food items
- **Meal Logging**: Add meals with quantities
- **Meal Categories**: Organize by breakfast, lunch, dinner, snacks
- **Daily Goal Tracking**: Monitor progress toward 2000 calorie daily goal
- **Meal Breakdown**: View calories by meal type
- **Food Filtering**: Filter foods by category (Fruits, Protein, Grains, Dairy, Fast Food)
- **Delete Meals**: Remove incorrectly logged meals

### 📊 Dashboard
- **User Welcome**: Personalized greeting with user information
- **Quick Access**: Links to stopwatch and calorie tracker
- **Profile Info**: Display user details and join date

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Navigate to the project directory**
   ```bash
   cd fitness-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
fitness-tracker/
├── src/
│   ├── pages/
│   │   ├── Login.jsx              # Login page component
│   │   ├── Signup.jsx             # Signup page component
│   │   ├── Dashboard.jsx          # Main dashboard
│   │   ├── Stopwatch.jsx          # Stopwatch component
│   │   ├── CalorieTracker.jsx     # Calorie tracker component
│   │   ├── Auth.css               # Authentication styling
│   │   ├── Dashboard.css          # Dashboard styling
│   │   ├── Stopwatch.css          # Stopwatch styling
│   │   └── CalorieTracker.css     # Calorie tracker styling
│   ├── App.jsx                    # Main app component with routing
│   ├── App.css                    # App styles
│   ├── index.css                  # Global styles
│   └── main.jsx                   # Entry point
├── index.html                     # HTML template
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Vite configuration
└── README.md                      # This file
```

## Technologies Used

- **React 18.2**: UI framework
- **React Router 6.8**: Client-side routing
- **Vite 4.3**: Build tool and dev server
- **CSS3**: Responsive styling with gradients and animations

## Features Breakdown

### Authentication Flow
1. User arrives at login page
2. Can either login with existing credentials or navigate to signup
3. After successful login/signup, user is redirected to dashboard
4. Session is persisted using localStorage
5. Logout clears session data

### Stopwatch Features
- **Real-time Timer**: Updates every 10ms for precision
- **Lap Recording**: Capture multiple lap times
- **Display Format**: MM:SS.MS (Minutes:Seconds.Milliseconds)
- **Full Controls**: Start, Pause, Lap, Reset buttons

### Calorie Tracker Features
- **Food Database**:
  - Fruits: Apple, Banana, Orange
  - Protein: Chicken, Fish, Eggs
  - Grains: Rice, Bread, Pasta
  - Dairy: Milk, Yogurt, Cheese
  - Fast Food: Pizza, Burger, Fries

- **Daily Progress**:
  - Visual progress bar showing calories vs 2000 cal goal
  - Remaining calories display
  - Breakdown by meal type

## User Interface

### Color Scheme
- **Primary**: Purple gradient (#667eea to #764ba2)
- **Accent**: Teal (#4ecdc4)
- **Text**: Dark gray (#333)
- **Background**: White with gradient overlays

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized layouts
- Flexible grid system
- Touch-friendly buttons and inputs

## Data Persistence

- **User Data**: Stored in localStorage as JSON
- **Session**: Checked on app load
- **Meals**: Currently session-based (can be extended to backend)

## Future Enhancements

- Backend integration for data persistence
- User profiles with goals customization
- Workout history and statistics
- Calorie recommendations based on activity
- Social features (friend connections, challenges)
- Mobile app version
- Push notifications for meal reminders
- Integration with fitness APIs

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for educational purposes.

## Author

Created as a modern fitness tracking application with React and Vite.
