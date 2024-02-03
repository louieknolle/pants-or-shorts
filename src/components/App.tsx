import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomePage from './WelcomePage'
import WeatherPage from './WeatherPage'

function App() {
  // No more state for open as we use routes
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </Router>
  )
}

export default App
