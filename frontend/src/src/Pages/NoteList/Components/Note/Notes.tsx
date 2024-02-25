import React from "react";
import DeleteIcon from "../../../../Components/SVG/DeleteIcon/DeleteIcon";
import ArchiveIcon from "../../../../Components/SVG/ArchiveIcon/ArchiveIcon";
import EditIcon from "../../../../Components/SVG/EditIcon/EditIcon";
import { archiveNote, deleteNote } from "../../Services/Note.service";
import { NoteProps } from "../../interfaces/NoteProps.type";
import { useNavigate } from "react-router-dom";

export default function Note({ title, content, created, updated, id, reload }: NoteProps) {
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
    reload();
  };

  const handleArchive = async () => {
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
          <button
            className="text-xl hover:text-black p-1"
            onClick={handleArchive}
          >
            <ArchiveIcon />
          </button>
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
    </article>
  );
}
