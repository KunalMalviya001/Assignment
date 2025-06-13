// Entry point for the React application.
// Renders the App component inside a React StrictMode wrapper for highlighting potential problems.
// Uses React 18's createRoot API for improved performance and concurrent features.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
