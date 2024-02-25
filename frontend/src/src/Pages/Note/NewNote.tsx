import React from "react";

export default function NewNote() {
  return (
    <div className="bg-white rounded shadow p-4">
      <div className="flex items-center justify-between mb-4">
        <input
          className="text-gray-800 text-xl font-medium bg-transparent outline-none w-full"
          type="text"
          value="Grocery List"
        />

        <div className="flex items-center text-gray-400">
          <i className="ri-save-line text-xl mr-3"></i>
          <i className="ri-close-circle-line text-xl"></i>
        </div>
      </div>

      <textarea className="bg-transparent outline-none w-full resize-none h-64"></textarea>
    </div>
  );
}
