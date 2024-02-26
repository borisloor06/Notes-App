import { useState, useEffect } from "react";
import { getCategories } from "../Services/Category.service";
import { Category } from "../../NoteList/interfaces/Category.type";

export const useCategories = () => {
  const [categories, setCategory] = useState([] as Category[]);

  useEffect(() => {
    getCategories()
      .then((categories) => {
        setCategory(categories);
      })
      .catch(() => {
        setCategory([]);
      });
  }, []);

  return { categories };
};
