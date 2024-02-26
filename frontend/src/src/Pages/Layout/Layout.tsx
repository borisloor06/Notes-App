import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import AddIcon from "../../Components/SVG/AddIcon/AddIcon";

export default function Layout() {
  const navigate = useNavigate();
  const goNewNote = () => {
    navigate("/new");
  };

  const location = useLocation();
  const isNewNote =
    location.pathname === "/new" ||
    location.pathname.includes("/edit") ||
    location.pathname.includes("/categories");

  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <main className="flex flex-1">
        <main className="flex-1 bg-tertiary overflow-y-auto p-8">
          {!isNewNote && (
            <section className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold">Notes</h1>
              <button
                className="bg-blue-500 flex items-center justify-between px-4 py-2 rounded-lg shadow text-white"
                onClick={goNewNote}
              >
                <AddIcon />
                <span className="ms-1">Create new note</span>
              </button>
            </section>
          )}
          {<Outlet />}
        </main>
      </main>
      <Footer />
    </main>
  );
}
