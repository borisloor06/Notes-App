import React from "react";
import Note from "../../Components/Note/Notes";

export default function NotesList() {
  return (
    <section className="p-8 grid gap-6 grid-cols-1 md:grid-cols-3">
      <Note />
    </section>
  );
}
