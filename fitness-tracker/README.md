# Fitness Tracker App

A comprehensive React-based fitness tracking application with a stopwatch and calorie tracker, featuring user authentication (login and signup).

## Features

### 🔐 Authentication
- **Signup Page**: Create a new account with email and password
- **Login Page**: Secure login for existing users
- Password validation (minimum 6 characters)
- Email validation
- Local storage-based session management

### ⏱️ Stopwatch
- Start, pause, and resume functionality
- Lap tracking with individual lap times
- Real-time display with hours, minutes, seconds, and milliseconds
- Reset timer to start over
- Track multiple laps during a session

### 🍎 Calorie Tracker
- Set and adjust daily calorie goals
- Add foods with calorie values
- Real-time calorie consumption tracking
- Visual progress bar showing daily intake
- Edit or delete previously logged foods
- View consumed, remaining, and percentage of daily goal
- Timestamp tracking for each food entry

## Project Structure

```
fitness-tracker/
├── src/
│   ├── components/
│   │   ├── Stopwatch.jsx
│   │   ├── Stopwatch.css
│   │   ├── CalorieTracker.jsx
│   │   └── CalorieTracker.css
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Auth.css
│   │   └── Dashboard.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Tech Stack

- **React 18.2.0** - UI Library
- **React Router DOM 6.8.0** - Client-side routing
- **Vite 4.3.9** - Build tool and dev server
- **CSS3** - Styling with modern animations and gradients

## Getting Started

### Installation

1. Navigate to the fitness-tracker directory:
```bash
cd fitness-tracker
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000` (or the next available port)

### Build

Create a production build:
```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Usage Guide

### 1. Authentication Flow
- Start at the login page or navigate to signup for a new account
- Enter your email and password
- For signup, password must be at least 6 characters
- After login/signup, you'll be redirected to the dashboard

### 2. Using the Stopwatch
- Click **Start** to begin timing
- Use **Lap** to record lap times while running
- Click **Pause** to pause the timer
- Click **Resume** to continue from where you paused
- Click **Reset** to clear the timer and lap times
- All lap times are displayed in the Lap Times section

### 3. Using the Calorie Tracker
- Set your daily calorie goal (default: 2000 kcal)
- Enter food name and calories in the input fields
- Click **Add** to log the food
- View real-time statistics:
  - Calories consumed today
  - Remaining calories for the day
  - Percentage of daily goal consumed
- Edit any logged food by clicking **Edit**
- Delete entries by clicking **Delete**
- Visual progress bar shows your daily intake percentage

## Features Highlights

### Modern UI Design
- Gradient backgrounds with purple/blue theme
- Smooth animations and transitions
- Responsive layout for all screen sizes
- Clean and intuitive interface

### Data Persistence
- User sessions stored in browser localStorage
- Food entries stored per session
- Calorie data persists during the session

### Input Validation
- Email format validation
- Password strength checking
- Numeric validation for calorie inputs
- Required field validation

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Backend integration for persistent data storage
- User profiles and statistics
- Weekly/monthly reports
- Exercise tracking
- Integration with fitness APIs
- Mobile app version
- Social sharing features

## License

This project is private and created for educational purposes.
