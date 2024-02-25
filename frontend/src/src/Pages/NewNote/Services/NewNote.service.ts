import { URL_API } from "../../../Constants/constants";
import { Note } from "../../NoteList/interfaces/Note.type";

export const createNote = async (note: Note) => {
  const response = await fetch(`${URL_API}/note`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });

  return response.json();
};

export const updateNote = async (note: Note) => {
  const response = await fetch(`${URL_API}/note/${note.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });

  return response.json();
};

export const getNote = async (id: string) => {
  const response = await fetch(`${URL_API}/note/${id}`);
  const note = (await response.json()) as Note;

  return note;
};
