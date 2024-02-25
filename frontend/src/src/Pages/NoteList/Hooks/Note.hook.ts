import { useEffect, useState } from "react";

import { Note } from "../interfaces/Note.type";
import { getNotes } from "../Services/Note.service";
import { NoteState } from "../interfaces/NoteListProps.type";

export function useNotes(initialState: Note[], type: NoteState) {
  const [notes, setNotes] = useState<Note[]>(initialState);

  useEffect(() => {
    refetchNotes();
  }, []);

  const refetchNotes = () => {
    getNotes(type)
      .then((notes) => {
        setNotes(notes);
      })
      .catch(() => {
        setNotes(initialState);
      });
  };

  return { notes, refetchNotes };
}
