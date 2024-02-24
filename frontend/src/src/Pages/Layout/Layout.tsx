import React from 'react'
import NotesList from '../MainPage/NoteList'

export default function Layout() {
  return (
    <main className="flex flex-1">
        <main className="flex-1 bg-tertiary overflow-y-auto p-8">
        <NotesList />
        </main>
    </main>
  )
}
