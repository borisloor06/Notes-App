import { URL_API } from "../../../Constants/constants";
import { Note } from "../interfaces/Note.type";
import { NoteState } from "../interfaces/NoteListProps.type";

export const getNotes = async (type: NoteState) => {
  const response = await fetch(`${URL_API}/note/${type}`);
  const notes = (await response.json()) as Note[];

  return notes;
};

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

export const deleteNote = async (id: string) => {
  const response = await fetch(`${URL_API}/note/${id}`, {
    method: "DELETE",
  });

  return response.json();
};

export const getNote = async (id: string) => {
  const response = await fetch(`${URL_API}/note/${id}`);
  const note = (await response.json()) as Note;

  return note;
};

export const archiveNote = async (id: string, state: boolean) => {
  const response = await fetch(`${URL_API}/note/archive/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ state }),
  });

  return response.json();
};
