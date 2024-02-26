import { URL_API } from "../../../Constants/constants";
import { Category } from "../../NoteList/interfaces/Category.type";

export const getCategories = async () => {
  const response = await fetch(`${URL_API}/category`);
  if (!response.ok) {
    throw new Error("There was an error getting the categories");
  }
  const categories = (await response.json()) as Category[];
  return categories;
};
