import { Note } from "./Note.type";

export interface FilterProps {
  notes: Note[];
  onFilter: (filteredNotes: Note[]) => void;
  lastState: boolean;
}

export const initialSelectedCategory = { id: 0, name: "all" };
