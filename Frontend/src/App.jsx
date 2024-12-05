
import React from 'react';
import './index.css';  // Make sure you're importing the CSS where Tailwind is configured
import Home from './home/Home.jsx';
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from './courses/Courses.jsx';
import Signup from './Components/Signup.jsx';
import Contact from './Components/Contact.jsx';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx';

function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Course" element= {authUser ? <Courses /> : <Navigate to="/Signup"/>} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contact" element={<Contact/>} />
          </Routes>
        <Toaster />

    
      </div>
    </>
  );
}

export default App;
