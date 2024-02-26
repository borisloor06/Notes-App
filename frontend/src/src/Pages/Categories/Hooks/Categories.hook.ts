import { useState, useEffect } from "react";
import { getCategories } from "../Services/Category.service";
import { Category } from "../Interfaces/Category.type";

export const useCategories = () => {
  const [categories, setCategory] = useState([] as Category[]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    getCategories()
      .then((categories) => {
        setCategory(categories);
      })
      .catch(() => {
        setCategory([]);
      });
  };

  return { categories, fetchCategories };
};
