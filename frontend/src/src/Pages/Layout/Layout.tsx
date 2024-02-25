import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function Layout() {
  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <main className="flex flex-1">
        <main className="flex-1 bg-tertiary overflow-y-auto p-8">
          <button className="bg-blue-500 flex items-center justify-between px-4 py-2 rounded shadow text-white">
            <i className="ri-add-line mr-2"></i>
            Create new note
          </button>
          {<Outlet />}
        </main>
      </main>
      <Footer />
    </main>
  );
}
