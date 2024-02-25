import { useEffect, useState } from "react";

import { Note, NoteState } from "../interfaces/Note.type";
import { getNotes } from "../Services/Note.service";

export function useNotes(initialState: Note[], type: NoteState) {
  const [notes, setNotes] = useState<Note[]>(initialState);

  useEffect(() => {
    refetchNotes(type);
  }, []);

  const refetchNotes = (type: NoteState) => {
    getNotes(type)
      .then((notes) => {
        setNotes(notes);
      })
      .catch(() => {
        console.log("error");
        setNotes(initialState);
      });
  };

  return { notes, refetchNotes };
}
