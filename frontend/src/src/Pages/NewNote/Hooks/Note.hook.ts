import { useState, useEffect } from "react";
import { Note } from "../../NoteList/interfaces/Note.type";
import { getNote } from "../../NoteList/Services/Note.service";

export const useNote = (id: string | undefined) => {
  const [note, setNote] = useState({} as Note);

  useEffect(() => {
    setNote({} as Note);
    if (id) {
      console.log("Editing note with id: ", id);
      getNote(id).then((note) => {
        setNote(note);
      });
    }

    return () => {
      clearNote();
    };
  }, [id]);

  const clearNote = () => {
    setNote({} as Note);
  };

  return { note, clearNote };
};
