import React, { ChangeEvent, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SaveIcon from "../../Components/SVG/SaveIcon/SaveIcon";
import CloseIcon from "../../Components/SVG/CloseIcon/CloseIcon";
import { useNote } from "./Hooks/Note.hook";
import {
  NewNote,
  newNoteInitialState,
} from "../NoteList/interfaces/Note.type";
import { useSaveNote } from "./Hooks/NewNote.hook";
import { Toast } from "../../Constants/constants";
import { useCategories } from "./Hooks/Categories.hook";

export default function NewNote() {
  const navigation = useNavigate();
  const [newNote, setNewNote] = useState(newNoteInitialState as NewNote);
  const { categories } = useCategories();
  // if there is an id, it means that we are editing a note
  const { id } = useParams();
  const { note } = useNote(id);
  const { error, savedNote, saveNote } = useSaveNote();

  useEffect(() => {
    if (note && newNote.id !== note.id) {
      const categories = note.categories.map((c) => c.id) as number[];
      setNewNote({
        ...note,
        categories,
      });
    }
  }, [note, newNote.id]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewNote({
      ...newNote,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // if the checkbox is checked, we add the category to the note only ids
    if (e.target.checked) {
      setNewNote({
        ...newNote,
        categories: [...newNote.categories, +value],
      });
      return;
    }
    setNewNote({
      ...newNote,
      categories: [+value],
    });
  };

  const handleSave = () => {
    saveNote(newNote);
    if (error) {
      Toast.fire({
        icon: "error",
        title: "An error occurred",
      });
    }
    if (savedNote) {
      Toast.fire({
        icon: "success",
        title: "Saved successfully",
      });
      console.log(note);
      if (!note.state && note?.id) {
        return navigation(`/archive`);
      }
      navigation("/");
    }
  };

  const goHome = () => {
    navigation("/");
  };

  const validCategories = categories?.length > 0 && categories[0].id;

  return (
    <div className="bg-white rounded shadow p-4 m-2 lg:mx-72">
      <div className="flex items-center justify-between mb-4">
        <input
          className="text-gray-800 text-xl font-medium bg-transparent outline-none w-full"
          type="text"
          placeholder="Title"
          name="title"
          value={newNote?.title || ""}
          onChange={handleInputChange}
        />

        <div className="flex items-center text-gray-400">
          <button
            className="hover:text-black text-xl  p-1 md:w-28 inline-flex"
            onClick={handleSave}
          >
            <SaveIcon />
            <span className="md:inline hidden ms-2">Save</span>
          </button>

          <button
            className="hover:text-red-600 text-red-400 text-xl  p-1 md:w-28 inline-flex"
            onClick={goHome}
          >
            <CloseIcon />
            <span className="md:inline hidden ms-2">Cancel</span>
          </button>
        </div>
      </div>
      <textarea
        className="bg-transparent outline-none w-full resize-none h-64"
        placeholder="Content"
        name="content"
        value={newNote?.content || ""}
        onChange={handleInputChange}
      ></textarea>
      <section className="flex justify-end mt-4">
        {/* we can select many categories for one note */}
        {validCategories &&
          categories.map((category) => (
            <label key={category.id} className="flex items-center">
              <input
                type="checkbox"
                name="categories"
                value={category.id}
                onChange={handleCheckboxChange}
                checked={note.categories?.some((c) => c.id === category.id)}
              />
              <span className="ms-2">{category.name}</span>
            </label>
          ))}
      </section>
    </div>
  );
}
