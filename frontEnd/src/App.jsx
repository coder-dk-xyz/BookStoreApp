import React from 'react'
// pages import:-,Courses,Home,Login,Register,Logout
import Home from './pages/Home'
import Courses from './pages/Courses'
import Signup from './components/Signup'
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from './context/AuthProvider';

function App() {

      const [authUser, setAuthUser] = useAuth();
      console.log(authUser);
  return (
    <>
      {/* Toast Container */}
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className='dark:bg-black dark:text-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
