import React from 'react'
import './components/auth.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/landingpage' element={<Profile />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App