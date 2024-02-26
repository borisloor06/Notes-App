import { URL_API } from "../../../Constants/constants";
import { Category } from "../../Categories/Interfaces/Category.type";
import { UpdatedNote } from "../../NoteList/interfaces/Note.type";

export const getCategory = async (id: string) => {
  const response = await fetch(`${URL_API}/category/${id}`);
  if (!response.ok) {
    throw new Error("There was an error getting the category");
  }
  const category = (await response.json()) as Category;
  return category;
};

export const createCategory = async ({ name }: Category) => {
  const response = await fetch(`${URL_API}/category`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  if (!response.ok) {
    throw new Error("There was an error creating the category");
  }
  const category = (await response.json()) as Category;
  return category;
};

export const updateCategory = async ({ id, name }: Category) => {
  const response = await fetch(`${URL_API}/category/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  if (!response.ok) {
    throw new Error("There was an error updating the category");
  }
  const category = (await response.json()) as UpdatedNote;
  return category;
};
