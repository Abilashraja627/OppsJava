# Fitness Tracker

A modern React application featuring a stopwatch and calorie tracker with user authentication.

## Features

- **User Authentication**
  - Sign up and login functionality
  - Secure password validation
  - User profile management

- **Stopwatch**
  - Start, pause, and reset functionality
  - Lap recording for interval training
  - Precise time tracking

- **Calorie Tracker**
  - Log meals and track daily calorie intake
  - Set and adjust daily calorie goals
  - View progress with visual charts
  - Edit or delete logged meals
  - Local storage for data persistence

- **Dashboard**
  - Quick access to all features
  - User greeting and profile info
  - Fitness tips and guidance

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the fitness-tracker directory:
```bash
cd fitness-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open automatically in your browser at `http://localhost:3000`

## Usage

### Login/Signup
- Create a new account or login with existing credentials
- Email format: any valid email address
- Password must be at least 6 characters

### Stopwatch
- Click **Start** to begin timing
- Click **Lap** to record lap times
- Click **Pause** to pause the timer
- Click **Reset** to clear the timer and laps

### Calorie Tracker
- Enter food name, calories per unit, and quantity
- Click **Add Food** to log the meal
- Track remaining calories toward your daily goal
- Edit or delete entries as needed
- Set your daily calorie goal using the input field

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm run eject` - Ejects from Create React App (irreversible)

## Technologies Used

- React 18.2.0
- React Router DOM 6.14.0
- CSS3 for styling
- Local Storage API for data persistence

## Features Highlights

✨ Modern UI with gradient backgrounds
📱 Fully responsive design
🔐 Client-side authentication
💾 Persistent data storage
⚡ Fast and smooth animations

## File Structure

```
fitness-tracker/
├── public/
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   ├── Dashboard.js
│   │   ├── Stopwatch.js
│   │   ├── CalorieTracker.js
│   │   └── *.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## License

This project is open source and available under the MIT License.
