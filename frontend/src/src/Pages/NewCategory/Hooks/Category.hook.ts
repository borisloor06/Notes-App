import { useState, useEffect } from "react";
import { getCategory } from "../Services/NewCategory.service";
import { Category } from "../../Categories/Interfaces/Category.type";

export const useCategory = (id: string | undefined) => {
  const [category, setNote] = useState({} as Category);

  useEffect(() => {
    setNote({} as Category);
    if (id) {
      console.log("Editing note with id: ", id);
      getCategory(id)
        .then((category) => {
          setNote(category);
        })
        .catch(() => {
          clearNote();
        });
    }

    return () => {
      clearNote();
    };
  }, [id]);

  const clearNote = () => {
    setNote({} as Category);
  };

  return { category, clearNote };
};
