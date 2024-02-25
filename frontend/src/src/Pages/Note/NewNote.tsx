import React from "react";
import { useNavigate } from "react-router-dom";
import SaveIcon from "../../Components/SVG/SaveIcon/SaveIcon";
import CloseIcon from "../../Components/SVG/CloseIcon/CloseIcon";

export default function NewNote() {
  const navigation = useNavigate();
  const goHome = () => {
    navigation("/");
  };

  return (
    <div className="bg-white rounded shadow p-4 m-2 md:mx-96">
      <div className="flex items-center justify-between mb-4">
        <input
          className="text-gray-800 text-xl font-medium bg-transparent outline-none w-full"
          type="text"
          placeholder="Title"
        />

        <div className="flex items-center text-gray-400">
          <button className="hover:text-black text-xl  p-1 md:w-28 inline-flex">
            <SaveIcon />
            <span className="md:inline hidden ms-2">Save</span>
          </button>

          <button className="hover:text-red-600 text-red-400 text-xl  p-1 md:w-28 inline-flex" 
          onClick={goHome}>
            <CloseIcon />
            <span className="md:inline hidden ms-2">Cancel</span>
          </button>
        </div>
      </div>
      <textarea className="bg-transparent outline-none w-full resize-none h-64" placeholder="Content"></textarea>
    </div>
  );
}
