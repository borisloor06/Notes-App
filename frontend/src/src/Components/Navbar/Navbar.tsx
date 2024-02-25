import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-primary text-white p-4 flex justify-between items-center">
      <h1 className="text-4xl">Notes App</h1>
      <nav className="flex w-40 justify-around">
        <div>
          <Link to="/">My notes</Link>
        </div>
        <div>
          <Link to="/archive">Archive</Link>
        </div>
      </nav>
    </header>
  );
}
