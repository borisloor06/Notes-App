import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import AddIcon from "../../Components/SVG/AddIcon/AddIcon";

export default function Layout() {
  const navigate = useNavigate();
  const goNewNote = () => {
    navigate("/new");
  };

  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <main className="flex flex-1">
        <main className="flex-1 bg-tertiary overflow-y-auto p-8">
          <button
            className="bg-blue-500 flex items-center justify-between px-4 py-2 rounded shadow text-white"
            onClick={goNewNote}
          >
            <AddIcon />
            <span className="ms-1">Create new note</span>
          </button>
          {<Outlet />}
        </main>
      </main>
      <Footer />
    </main>
  );
}
