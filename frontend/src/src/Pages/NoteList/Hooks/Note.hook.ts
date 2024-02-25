import { useEffect, useState } from "react";

import { Note } from "../interfaces/Note.type";
import { getNotes } from "../Services/Note.service";

export function useNotes(initialState: Note[]) {
  const [notes, setNotes] = useState<Note[]>(initialState);

  useEffect(() => {
    refetchNotes();
  }, []);

  const refetchNotes = () => {
    getNotes()
      .then((notes) => {
        setNotes(notes);
      })
      .catch(() => {
        setNotes(initialState);
      });
  }

  return {notes, refetchNotes};
}
