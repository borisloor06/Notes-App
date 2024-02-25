export interface NoteProps {
  id?: string;
  title: string;
  content: string;
  created: string;
  updated: string;
  reload: () => void;
}
