import { useEffect, useState } from "react";
import axios from "axios";

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);

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

  return (
    <div>
      <h2>Category Management</h2>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryManagement;