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

export const notesInitialState = {
  id: "",
  title: "",
  content: "",
  state: true,
  created: "",
  updated: "",
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
