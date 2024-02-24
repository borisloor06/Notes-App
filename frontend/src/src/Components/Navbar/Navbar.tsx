import React from 'react'

export default function Navbar() {
  return (
    <header className="bg-primary text-white p-4 flex justify-between items-center">
        <h1 className="text-4xl">Notes App</h1>
        <nav className="flex w-40 justify-around">
                <div>
                    <a href="#">Home</a>
                </div>
                <div>
                    <a href="#">Notes</a>
                </div>
        </nav>
    </header>
  )
}
