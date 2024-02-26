import { URL_API } from "../../../Constants/constants";
import { Category } from "../Interfaces/Category.type";

export const getCategories = async () => {
  const response = await fetch(`${URL_API}/category`);
  if (!response.ok) {
    throw new Error("There was an error getting the categories");
  }
  const categories = (await response.json()) as Category[];
  return categories;
};

export const deleteCategory = async (id: number) => {
  const response = await fetch(`${URL_API}/category/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("There was an error deleting the category");
  }
  return true;
};