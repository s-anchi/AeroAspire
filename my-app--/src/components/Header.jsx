import React from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon, HomeIcon, PlusCircleIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-800">
      <h1 className="font-bold text-xl text-blue-600">Task Manager</h1>
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center gap-1 hover:text-blue-500">
          <HomeIcon className="h-5 w-5"/> Home
        </Link>
        <Link to="/add" className="flex items-center gap-1 hover:text-blue-500">
          <PlusCircleIcon className="h-5 w-5"/> Add Task
        </Link>
        <Link to="/about" className="flex items-center gap-1 hover:text-blue-500">
          <InformationCircleIcon className="h-5 w-5"/> About
        </Link>
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? <SunIcon className="h-5 w-5 text-yellow-400"/> : <MoonIcon className="h-5 w-5"/>}
        </button>
      </div>
    </nav>
  );
};

export default Header;
