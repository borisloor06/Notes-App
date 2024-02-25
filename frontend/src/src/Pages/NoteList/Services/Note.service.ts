import { URL_API } from "../../../Constants/constants";
import { Note, NoteState } from "../interfaces/Note.type";

export const getNotes = async (type: NoteState) => {
  const response = await fetch(`${URL_API}/note/${type}`);
  if (!response.ok) {
    throw new Error("Error fetching notes");
  }
  const notes = (await response.json()) as Note[];
  return notes;
};

export const deleteNote = async (id: string) => {
  const response = await fetch(`${URL_API}/note/${id}`, {
    method: "DELETE",
  });

  return response.json();
};

export const archiveNote = async (id: string, state: boolean) => {
  const response = await fetch(`${URL_API}/note/archive/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ state }),
  });

  return response.json();
};
