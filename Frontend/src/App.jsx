import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Navbar from "./components/Navbar"; // Assuming Navbar exists for theme toggle
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import About from "./components/About";
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";

function App() {
  const[authUser,setAuthUser]=useAuth()
console.log(authUser);  // go to course route

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Navbar for Theme Toggle */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>} />
        
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
