import React from "react";
import Note from "./Components/Note/Notes";
import { useNotes } from "./Hooks/Note.hook";
import { notesInitialState } from "./interfaces/Note.type";

export default function NotesList() {
  const getNotes = useNotes([notesInitialState]);
  let notes = getNotes;

  const reloadNotes = () => {
    notes = getNotes;
  };

  return (
    <section className="p-8 grid gap-6 grid-cols-1 md:grid-cols-3">
      {notes.map((note) => (
        <Note key={note.id} {...note} reload={reloadNotes} />
      ))}
    </section>
  );
}
