import { Category } from "./Category.type";

export interface Note {
  id?: string;
  title: string;
  content: string;
  state: boolean;
  created: string;
  updated: string;
  categories: Category[];
}

export interface NewNote
  extends Omit<Note, "created" | "updated" | "categories"> {
  categories: number[];
}

export const notesInitialState = {
  id: "",
  title: "",
  content: "",
  state: true,
  created: "",
  updated: "",
  categories: [{ id: 0, name: "" }],
};

export const newNoteInitialState = {
  title: "",
  content: "",
  state: true,
  categories: [],
};

export enum NoteState {
  ACTIVE = "active",
  ARCHIVED = "archive",
}

export interface UpdatedNote {
  generatedMaps: [];
  raw: [];
  affected: number;
}
