import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className= "bg-gray-900 shadow-md sticky top-0 z-50">
      <div className= "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold text-indigo-500 animate-pulse">
          📚 Library
        </Link>

        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-200 hover:text-indigo-600 font-bold ${
                isActive ? "text-indigo-500 " : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/books/all"
            className={({ isActive }) =>
              `text-gray-300 hover:text-indigo-600 font-bold  ${
                isActive ? "text-indigo-500 " : ""
              }`
            }
          >
            Browse Books
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `text-gray-300 hover:text-indigo-600 font-bold ${
                isActive ? "text-indigo-500 " : ""
              }`
            }
          >
            Add Book
          </NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

