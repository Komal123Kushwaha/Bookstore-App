import React, { useState, useEffect } from "react";
import Login from "./Login";

function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  
  const navItems=(<>
   <li>
        <a href="/">Home</a>
        </li>
        <li>
        <a href="/course">Course</a>
        </li>
        <li>
        <a href="/contact">Contact</a>
        </li>
        <li>
        <a href="/about">About</a>
        </li>
  </>
  )
  return (
   <>
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 right-0 left-0 z-50">
        <div className="navbar bg-base-100 dark:bg-gray-800 dark:text-gray-200">
          <div className="navbar-start">
            <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {navItems}
      </ul>
    </div>
    <a className="text-2xl font-bold cursor-pointer">bookStore</a>
  </div>
  <div className="navbar-end space-x-3">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">{navItems} </ul>
  </div>
  
  <div className="hidden md:block">
  <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
  </div>
  <button
              onClick={toggleTheme}
              className="swap swap-rotate flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {theme === "light" ? (
                <svg
                  className="h-8 w-8 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4.5V2a1 1 0 1 1 2 0v2.5a1 1 0 1 1-2 0ZM12 22a1 1 0 0 1-2 0v-2.5a1 1 0 0 1 2 0V22Zm-7.8-8.5H2a1 1 0 0 1 0-2h2.5a1 1 0 0 1 0 2ZM22 12a1 1 0 0 1-2 0h-2.5a1 1 0 0 1 0-2H22a1 1 0 0 1 0 2Zm-5.07-6.93a1 1 0 0 1 1.42 0l1.77 1.76a1 1 0 0 1-1.42 1.42l-1.76-1.76a1 1 0 0 1 0-1.42ZM7.3 6.36 5.54 4.6a1 1 0 1 1 1.42-1.42l1.77 1.76a1 1 0 0 1-1.42 1.42ZM18.46 20l1.76-1.76a1 1 0 1 1 1.42 1.42l-1.76 1.77a1 1 0 0 1-1.42-1.42ZM4.6 18.46l1.77-1.77a1 1 0 0 1 1.42 1.42L6.03 20a1 1 0 1 1-1.42-1.42Z" />
                </svg>
              ) : (
                <svg
                  className="h-8 w-8 fill-current text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64 13a1 1 0 0 1-1.05-.14A8 8 0 0 1 10.08 4.5a1 1 0 0 1 .25-1.86 10 10 0 1 0 11.3 10.36A1 1 0 0 1 21.64 13Z" />
                </svg>
              )}
            </button>
  
    <a className="bg-black text-white p-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
    onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</a>
    <Login/>
  </div>
</div>
   </div>
   
   </>
  )
}

export default Navbar
