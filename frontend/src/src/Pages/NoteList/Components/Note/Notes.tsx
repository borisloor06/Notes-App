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

  return (
    <article className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-xl">{title}</h3>

        <div className="flex items-center text-gray-400">
          <button
            className="hover:text-black text-xl  p-1"
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
        </div>
      </div>
      <p className="text-gray-600 mt-2">{content.slice(0, 50)}...</p>
      <p className="text-gray-600 mt-2 text-sm">
        Last edited {daysAgo} days ago
      </p>
      {categories.length && (
        <footer className="flex justify-between items-center mt-4">
          {/* show categories */}
          <h3 className="text-gray-400 text-sm">Categories</h3>

          <div className="flex flex-wrap">
            {categories.slice(0, 3).map((category, index) => (
              <article
                key={index}
                className="bg-stone-200 text-stone-600 px-2 py-1 rounded mr-2 text-sm"
              >
                {category.name}
              </article>
            ))}

            {categories.length > 3 && (
              <article className="bg-gray-200 text-gray-600 px-2 py-1 rounded mr-2 text-sm">
                +{categories.length - 3} more
              </article>
            )}
          </div>
        </footer>
      )}
    </article>
  );
}
