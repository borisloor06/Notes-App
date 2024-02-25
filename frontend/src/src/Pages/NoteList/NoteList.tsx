import React, { useEffect } from "react";
import Note from "./Components/Note/Notes";
import { useNotes } from "./Hooks/Note.hook";
import { notesInitialState } from "./interfaces/Note.type";
import { NoteListProps } from "./interfaces/NoteListProps.type";

export default function NotesList({ type }: NoteListProps) {
  const { notes, refetchNotes } = useNotes([notesInitialState], type);

  useEffect(() => {
    reloadNotes();
  }, [type]);

  const reloadNotes = () => {
    refetchNotes(type);
  };

  const validNotes = () => {
    return (
      notes !== undefined && notes?.some((note) => note !== notesInitialState)
    );
  };

  return (
    <section className="p-8 grid gap-6 grid-cols-1 md:grid-cols-3">
      {validNotes() ? (
        notes.map((note) => (
          <Note key={note.id} {...note} reload={reloadNotes} />
        ))
      ) : (
        <div className="col-span-full text-center text-2xl">No notes found</div>
      )}
    </section>
  );
}
