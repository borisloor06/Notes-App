import React, { useState, useEffect } from "react";
import {
  FilterProps,
  initialSelectedCategory,
} from "../../interfaces/FilterProps.type";
import { useCategories } from "../../../Categories/Hooks/Categories.hook";
import { Category } from "../../../Categories/Interfaces/Category.type";
import { Toast } from "../../../../Constants/constants";

export default function Filter({ notes, onFilter, lastState }: FilterProps) {
  const [selectedCategory, setSelectedCategory] = useState(
    initialSelectedCategory as Category
  );

  const { categories } = useCategories();
  const allCategories = [initialSelectedCategory, ...categories];
  useEffect(() => {
    if (
      selectedCategory.name === "all" ||
      notes.some((note) => note?.state !== lastState)
    ) {
      if (!lastState) {
        Toast.fire({
          icon: "info",
          title: "No notes found",
        });
      }
      onFilter(notes);
      setSelectedCategory(initialSelectedCategory);
    }
  }, [notes, lastState]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = allCategories.find(
      (c) => c.name === e.target.value
    ) as Category;
    setSelectedCategory(category);
    if (e.target.value === "all") {
      onFilter(notes);
    } else {
      const filteredNotes = notes.filter(
        (note) =>
          note.categories.find((c) => c.name === e.target.value) !== undefined
      );
      onFilter(filteredNotes);
    }
  };

  return (
    <section className="w-full lg:w-1/3 grid grid-cols-3 gap-0 mb-3">
      <h3 className="col-span-1">Filter by Category</h3>
      <div className="relative col-span-2">
        <select
          className="appearance-none w-full px-2 py-1 rounded shadow"
          value={selectedCategory.name}
          onChange={handleChange}
        >
          {allCategories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 h-8 ">
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
