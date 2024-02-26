import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../SVG/MenuIcon/MenuIcon";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  return (
    <header className="bg-indigo-500 shadow-md">
      <div className=" mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">
          <Link to="/">Notes App</Link>
        </h1>

        <nav className="hidden md:flex space-x-6">
          <Link
            onClick={closeMenu}
            className="text-white hover:text-indigo-200"
            to="/"
          >
            My Notes
          </Link>

          <Link
            onClick={closeMenu}
            className="text-white hover:text-indigo-200"
            to="/archive"
          >
            Archive
          </Link>

          <Link
            onClick={closeMenu}
            className="text-white hover:text-indigo-200"
            to="/categories"
          >
            Categories
          </Link>
        </nav>

        {/* Mobile menu */}
        <button className="block md:hidden text-white">
          <MenuIcon onClick={() => setOpen(!open)} />
          <div
            className={`absolute ${
              open ? "" : "hidden"
            } top-16 right-0 w-48 bg-white shadow-lg px-6 py-4`}
          >
            <Link
              onClick={closeMenu}
              className="block text-gray-800 hover:bg-gray-100 py-2 px-4 rounded"
              to="/"
            >
              My Notes
            </Link>

            <Link
              onClick={closeMenu}
              className="block text-gray-800 hover:bg-gray-100 py-2 px-4 rounded"
              to="/archive"
            >
              Archive
            </Link>

            <Link
              onClick={closeMenu}
              className="block text-gray-800 hover:bg-gray-100 py-2 px-4 rounded"
              to="/categories"
            >
              Categories
            </Link>
          </div>
        </button>
      </div>
    </header>
  );
}
