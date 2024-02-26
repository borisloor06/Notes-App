import React, { useEffect, useState } from "react";
import Note from "./Components/Note/Notes";
import { useNotes } from "./Hooks/Notes.hook";
import { notesInitialState } from "./interfaces/Note.type";
import { NoteListProps } from "./interfaces/NoteListProps.type";
import Filter from "./Components/Filter/Filter";

export default function NotesList({ type }: NoteListProps) {
  const { notes, refetchNotes } = useNotes([notesInitialState], type);
  const [filteredNotes, setFilteredNotes] = useState(notes);

  useEffect(() => {
    reloadNotes();
  }, [type]);

  const reloadNotes = () => {
    refetchNotes(type);
  };

  const validNotes = () => {
    return (
      filteredNotes !== undefined && filteredNotes?.some((note) => note !== notesInitialState)
    );
  };

  return (
    <>
      <Filter
        notes={notes}
        onFilter={setFilteredNotes}
        lastState={filteredNotes[0]?.state}
      />
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {validNotes() ? (
          filteredNotes.map((note) => (
            <Note key={note.id} {...note} reload={reloadNotes} />
          ))
        ) : (
          <div className="col-span-full text-center text-2xl">
            No notes found
          </div>
        )}
      </section>
    </>
  );
}
