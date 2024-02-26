import React from "react";
import { useCategories } from "./Hooks/Categories.hook";
import DeleteIcon from "../../Components/SVG/DeleteIcon/DeleteIcon";
import EditIcon from "../../Components/SVG/EditIcon/EditIcon";
import { useNavigate } from "react-router-dom";
import { Toast } from "../../Constants/constants";
import { deleteCategory } from "./Services/Category.service";
import AddIcon from "../../Components/SVG/AddIcon/AddIcon";

export default function Categories() {
  const { categories, fetchCategories } = useCategories();
  const navigate = useNavigate();

  const handleDelete = async (id: number) => {
    console.log("Delete category", id);
    await deleteCategory(id);
    Toast.fire({
      icon: "success",
      title: "Category deleted successfully",
    });
    await fetchCategories();
  };

  const handleEdit = (id: number) => {
    console.log("Edit category", id);
    navigate(`/categories/edit/${id}`);
  };

  const goNewCategory = () => {
    navigate("/categories/new");
  };

  return (
    <main className="p-1">
      <section className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Categories</h2>
        <button
          className="bg-blue-500 flex items-center justify-between px-4 py-2 rounded-lg shadow text-white"
          onClick={goNewCategory}
        >
          <AddIcon />
          <span className="ms-1">New Category</span>
        </button>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {categories.length ? (
          categories.map((category) => (
            <div key={category.id} className="bg-white shadow rounded-lg p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">{category.name}</h2>
                <div className="flex items-center">
                  <button
                    className="text-blue-500 hover:text-blue-600 mr-2"
                    onClick={() => handleEdit(category.id as number)}
                  >
                    <EditIcon />
                  </button>

                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() => handleDelete(category.id as number)}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-500">No categories</div>
        )}
      </section>
    </main>
  );
}
