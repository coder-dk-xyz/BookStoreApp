import React from 'react'
import './App.css'
// pages import:-,Courses,Home,Login,Register,Logout
import Home from './pages/Home'
import Courses from './pages/Courses'
import { Navigate, Route, Routes } from "react-router-dom";





function App() {
  

  return (
    <>
 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        {/* <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/logout' element={<Logout />} /> */}
      </Routes>
    </>
  )
}

export default App
