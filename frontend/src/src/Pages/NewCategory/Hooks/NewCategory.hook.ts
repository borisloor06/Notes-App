import { Category } from "../../Categories/Interfaces/Category.type";
import { CategoryInitialState } from "../Interfaces/CategoryInitalState";
import { createCategory, updateCategory } from "../Services/NewCategory.service";
import { useState } from "react";

export const useSaveCategory = () => {
  const [error, setError] = useState(false);
  const [savedCategory, setSavedCategory] = useState(CategoryInitialState as Category);

  const saveCategory = async (category: Category) => {
    if (!category) {
      setError(true);
    }
    try {
      if (!category.id) {
        await createCategory(category)
          .then((newCategory) => {
            setSavedCategory(newCategory);
          })
          .catch(() => {
            setError(true);
          });
        return;
      }
      await updateCategory(category).then((updatedCategory) => {
        if (updatedCategory.affected === 0) {
          setError(true);
          return;
        }
        setSavedCategory({
          ...category,
        });
      });
    } catch (error) {
      setError(true);
    }
  };

  return { error, savedCategory, saveCategory };
};
