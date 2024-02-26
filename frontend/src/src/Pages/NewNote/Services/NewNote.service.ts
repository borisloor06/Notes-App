import { URL_API } from "../../../Constants/constants";
import { NewNote, Note, UpdatedNote } from "../../NoteList/interfaces/Note.type";

export const createNote = async (note: NewNote) => {
  const response = await fetch(`${URL_API}/note`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });

  if (!response.ok) {
    throw new Error("There was an error creating the note");
  }

  const newNote = (await response.json()) as Note;
  return newNote;
};

export const updateNote = async (note: NewNote) => {
  const response = await fetch(`${URL_API}/note/${note.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });

  if (!response.ok) {
    throw new Error("There was an error updating the note");
  }

  const updatedNote = (await response.json()) as UpdatedNote;

  return updatedNote;
};

export const getNote = async (id: string) => {
  const response = await fetch(`${URL_API}/note/${id}`);

  if (!response.ok) {
    throw new Error("There was an error getting the note");
  }

  const note = (await response.json()) as Note;
  return note;
};
