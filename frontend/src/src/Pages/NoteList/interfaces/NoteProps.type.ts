import { Note } from "./Note.type";

export interface NoteProps extends Note{
  reload: () => void;
}
