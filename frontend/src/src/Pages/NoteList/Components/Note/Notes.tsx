import React from "react";
import DeleteIcon from "../../../../Components/SVG/DeleteIcon/DeleteIcon";
import ArchiveIcon from "../../../../Components/SVG/ArchiveIcon/ArchiveIcon";
import EditIcon from "../../../../Components/SVG/EditIcon/EditIcon";
import { archiveNote, deleteNote } from "../../Services/Note.service";
import { NoteProps } from "../../interfaces/NoteProps.type";
import { useNavigate } from "react-router-dom";
import UnarchiveIcon from "../../../../Components/SVG/UnarchiveIcon/UnarchiveIcon";
import { Toast } from "../../../../Constants/constants";

export default function Note({
  title,
  content,
  created,
  updated,
  state,
  id,
  categories,
  reload,
}: NoteProps) {
  const lastTimeUpdated = updated ? updated : created;
  const navigate = useNavigate();

  const daysAgo = Math.floor(
    (new Date().getTime() - new Date(lastTimeUpdated).getTime()) /
      (1000 * 3600 * 24)
  );

  const handleEdit = () => {
    if (!id) return;
    navigate(`/edit/${id}`);
  };

  const handleDelete = async () => {
    if (!id) return;
    await deleteNote(id);
    Toast.fire({
      icon: "success",
      title: "Note deleted successfully",
    });
    reload();
  };

  const handleArchive = async () => {
    if (!id) return;
    await archiveNote(id, false);
    Toast.fire({
      icon: "success",
      title: "Note archived successfully",
    });
    reload();
  };

  const handleUnarchive = async () => {
    if (!id) return;
    await archiveNote(id, true);
    reload();
  };

  const validCategories = categories.length && categories[0].id !== 0;
  return (
    <article className="bg-white p-4 rounded shadow">
      <header className="flex justify-between items-center">
        <h3 className="font-medium text-xl">{title}</h3>

        <section className="flex items-center text-gray-400">
          <button
            className="text-blue-400 hover:text-blue-600  text-xl  p-1"
            onClick={handleEdit}
          >
            <EditIcon />
          </button>
          {state ? (
            <button
              className="text-xl hover:text-black p-1"
              onClick={handleArchive}
            >
              <ArchiveIcon />
            </button>
          ) : (
            <button
              className="hover:text-black text-xl  p-1"
              onClick={handleUnarchive}
            >
              <UnarchiveIcon />
            </button>
          )}

          <button
            className="hover:text-red-600 text-red-400 text-xl  p-1"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </button>
        </section>
      </header>
      <p className="text-gray-600 mt-2">
        {content.slice(0, 50)}
        {content.length > 50 ? <span>...</span> : null}
      </p>
      <p className="text-gray-600 mt-6 text-sm">
        Last edited {daysAgo} days ago
      </p>
      {validCategories ? (
        <footer className="bg-gray-50 p-4 md:flex md:items-center md:justify-between">
          <section className="mb-2 md:mb-0 lg:flex-row lg:flex-inline flex flex-col items-center justify-between gap-2">
            <h3 className="text-black text-sm uppercase tracking-widest">
              Categories
            </h3>

            <article className="flex flex-wrap flex-inline flex-1 gap-1">
              {categories.slice(0, 2).map((category, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-black px-2 py-1 rounded text-sm"
                >
                  {category.name}
                </a>
              ))}

              {categories.length > 2 && (
                <a
                  href="#"
                  className="bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-black px-2 py-1 rounded text-sm"
                >
                  +{categories.length - 2} more
                </a>
              )}
            </article>
          </section>
        </footer>
      ) : null}
    </article>
  );
}
