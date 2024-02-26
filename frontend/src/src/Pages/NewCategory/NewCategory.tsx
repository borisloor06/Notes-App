import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryInitialState } from "./Interfaces/CategoryInitalState";
import { Category } from "../Categories/Interfaces/Category.type";
import { useSaveCategory } from "./Hooks/NewCategory.hook";
import { useCategory } from "./Hooks/Category.hook";
import { Toast } from "../../Constants/constants";
import SaveIcon from "../../Components/SVG/SaveIcon/SaveIcon";
import CloseIcon from "../../Components/SVG/CloseIcon/CloseIcon";

export default function NewCategory() {
  const navigation = useNavigate();
  const [newCategory, setNewCategory] = useState(
    CategoryInitialState as Category
  );
  // if there is an id, it means that we are editing a note
  const { id } = useParams();
  const { category } = useCategory(id);
  const { error, savedCategory, saveCategory } = useSaveCategory();

  useEffect(() => {
    if (category && newCategory.id !== category.id) {
      setNewCategory({
        ...category,
      });
    }
  }, [category, newCategory.id]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCategory({
      ...newCategory,
      [name]: value,
    });
  };
  const handleSave = async () => {
    await saveCategory(newCategory);
    if (error) {
      Toast.fire({
        icon: "error",
        title: "An error occurred",
      });
    }
    if (savedCategory) {
      Toast.fire({
        icon: "success",
        title: "Saved successfully",
      });
      goHome();
    }
  };

  const goHome = () => {
    navigation("/categories");
  };
  return (
    <div className="bg-white rounded shadow p-4 m-2 lg:mx-72">
      <div className="flex items-center justify-between mb-4">
        <input
          className="text-gray-800 text-xl font-medium bg-transparent outline-none w-full"
          type="text"
          placeholder="Name"
          name="name"
          value={newCategory?.name || ""}
          onChange={handleInputChange}
        />

        <div className="flex items-center text-gray-400">
          <button
            className="hover:text-green-600 text-green-400 text-xl  p-1 md:w-28 inline-flex"
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
    </div>
  );
}
