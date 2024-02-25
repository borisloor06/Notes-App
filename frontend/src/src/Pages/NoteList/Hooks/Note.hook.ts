import { useEffect, useState } from "react";

import { Note } from "../interfaces/Note.type";
import { getNotes } from "../Services/Note.service";

export function useNotes(initialState: Note[]): Note[] {
  const [notes, setNotes] = useState<Note[]>(initialState);

  useEffect(() => {
    getNotes()
      .then((notes) => {
        setNotes(notes);
      })
      .catch(() => {
        setNotes(initialState);
      });
  }, []);

  return notes;
}
