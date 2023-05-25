import { useEffect, useState } from "react";
import axios from "axios";

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [newCategoryImage, setNewCategoryImage] = useState(null);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const response = await axios.get("http://localhost:9000/categories");
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("name", newCategory);
      formData.append("image", newCategoryImage);

      await axios.post("http://localhost:9000/categories", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setNewCategory("");
      setNewCategoryImage(null);
      getCategories();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (categoryId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:9000/categories/${categoryId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getCategories();
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (e) => {
    setNewCategoryImage(e.target.files[0]);
  };


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-5 mt-4">Category Management</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="New Category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
              <input
                type="file"
                className="form-control"
                onChange={handleImageChange}
              />
              <button className="btn btn-primary" type="submit">
                Create
              </button>
            </div>
          </form>
          <ul className="list-group">
            {categories.map((category) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={category._id}>
                {category.name}
                <button className="btn btn-danger" onClick={() => handleDelete(category._id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryManagement;