import React from 'react'
// pages import:-,Courses,Home,Login,Register,Logout
import Home from './pages/Home'
import Courses from './pages/Courses'
import Signup from './components/Signup'
import { Navigate, Route, Routes } from "react-router-dom";





function App() {
  

  return (
    <>
    <div className='dark:bg-black dark:text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
