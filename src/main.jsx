import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CoordinateProvider } from './components/Cordinate.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CoordinateProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </CoordinateProvider>
  </StrictMode>,
)
