import './App.css'
import Hotel from './pages/Hotel'
import { Route, Routes } from 'react-router-dom'
import HotelDetalis from "./components/HotelDetalis"
function App() {

  return(
    <Routes>
    <Route path="/" element={<Hotel />} />
    <Route path="/hotel/:id" element={<HotelDetalis />} />
  </Routes>

  )
}

export default App
