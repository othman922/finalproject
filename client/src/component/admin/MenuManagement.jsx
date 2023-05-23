import { useEffect, useState } from "react";
import axios from "axios";

const MenuManagement = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [vegan, setVegan] = useState(false);
  const [category, setCategory] = useState("");

  useEffect(() => {
    getMenuItems();
  }, []);

  const getMenuItems = async () => {
    try {
      const response = await axios.get("http://localhost:9000/menu");
      setMenuItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:9000/menu",
        {
          name,
          description,
          image,
          price,
          vegan,
          category,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response)

      setMenuItems((prevItems) => [...prevItems, response.data]);
      clearForm();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:9000/menu/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      setMenuItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error(error);
    }
  };

  const clearForm = () => {
    setName("");
    setDescription("");
    setImage(null);
    setPrice("");
    setVegan(false);
    setCategory("");
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <h2>Menu Management</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Image:</label>
          <input type="file"onChange={handleImageChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label>Vegan:</label>
          <input type="checkbox" checked={vegan} onChange={(e) => setVegan(e.target.checked)} />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem._id}>
            {menuItem.name} - {menuItem.description} - {menuItem.price}
            <button onClick={() => handleDelete(menuItem._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuManagement;