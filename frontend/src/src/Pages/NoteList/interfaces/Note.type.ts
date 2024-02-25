export interface Note {
  id?: string;
  title: string;
  content: string;
  state: boolean;
  created: string;
  updated: string;
}

export const notesInitialState = {
  id: "",
  title: "",
  content: "",
  state: true,
  created: "",
  updated: "",
};


export enum NoteState {
  ACTIVE = "active",
  ARCHIVED = "archive",
}
