export interface NoteListProps {
  type: NoteState;
}

export enum NoteState {
  ACTIVE = "active",
  ARCHIVED = "archived",
}
