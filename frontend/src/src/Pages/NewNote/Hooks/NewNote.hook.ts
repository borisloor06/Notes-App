import { Note, notesInitialState } from "../../NoteList/interfaces/Note.type";
import { createNote, updateNote } from "../Services/NewNote.service";
import { useState } from "react";

export const useSaveNote = () => {
  const [error, setError] = useState(false);
  const [savedNote, setSavedNote] = useState(notesInitialState as Note);

  const saveNote = (note: Note) => {
    if (!note) {
      setError(true);
    }
    try {
      if (!note.id) {
        createNote(note)
          .then((newNote) => {
            setSavedNote(newNote);
          })
          .catch(() => {
            setError(true);
          });
        return;
      }
      updateNote(note).then((updatedNote) => {
        if (updatedNote.affected === 0) {
          setError(true);
          return;
        }
        setSavedNote({
          ...note,
        });
      });
    } catch (error) {
      setError(true);
    }
  };

  return { error, savedNote, saveNote };
};
