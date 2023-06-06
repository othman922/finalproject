import { useEffect, useState } from "react";
import axios from "axios";

import "./MenuManagement.css"

const MenuManagement = () => {
  const [showItems, setShowItems] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [vegan, setVegan] = useState(false);
  const [category, setCategory] = useState("");
  const [editingItemId, setEditingItemId] = useState(null);


  const handleToggleItems = () => {
    setShowItems(!showItems);
  };

  useEffect(() => {
    getMenuItems();
    getCategories();
  }, []);

  const getMenuItems = async () => {
    try {
      const response = await axios.get("http://localhost:9000/menu");
      setMenuItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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

  const handleEdit = (itemId) => {
    const editingItem = menuItems.find((item) => item._id === itemId);
    if (editingItem) {
      setEditingItemId(itemId);
      setName(editingItem.name);
      setDescription(editingItem.description);
      setPrice(editingItem.price);
      setVegan(editingItem.vegan);
      setCategory(editingItem.category);
    }
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
    clearForm();
  };

  const handleUpdate = async (itemId) => {
    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("price", price);
      formData.append("vegan", vegan);
      formData.append("category", category);

      const response = await axios.put(`http://localhost:9000/menu/${itemId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const updatedItemIndex = menuItems.findIndex((item) => item._id === itemId);
      if (updatedItemIndex !== -1) {
        const updatedItems = [...menuItems];
        updatedItems[updatedItemIndex] = response.data;
        setMenuItems(updatedItems);
      }

      handleCancelEdit();
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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-5 mt-4">Create a New Menu Item</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Description:</label>
              <input className="form-control" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Image:</label>
              <input className="form-control" type="file" onChange={handleImageChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Price:</label>
              <input
                className="form-control"
                type="number"
                value={price}
                onChange={(e) => {
                  const newPrice = parseInt(e.target.value);
                  if (newPrice >= 0) {
                  setPrice(newPrice)}}} />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label me-3">Vegan:</label>
              <div className="form-check">
                <input className="form-check-input" id="checkbox-input" type="checkbox" checked={vegan} onChange={(e) => setVegan(e.target.checked)} />
              </div>
            </div>
            <div className="mb-3">
            <label className="form-label">Category:</label>
              <select
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
          </div>
            <button className="btn btn-primary" type="submit">Create</button>
          </form>
          <div className="mb-5 mt-5">
            <button className="btn btn-secondary mb-3" onClick={handleToggleItems}>
              {showItems ? "Hide Menu Items" : "Show Menu Items"}
            </button>
            {showItems && (
              <div>
                {menuItems.map((menuItem) => (
                  <div className="card mb-3" key={menuItem._id}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={menuItem.image} alt={menuItem.name} className="img-fluid" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          {editingItemId === menuItem._id ? (
                            <div>
                              <h5 className="card-title">Edit {menuItem.name}</h5>
                              <div className="mb-3">
                                <label className="form-label">Name:</label>
                                <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                              </div>
                              <div className="mb-3">
                                <label className="form-label">Description:</label>
                                <input className="form-control" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                              </div>
                              <div className="mb-3">
                                <label className="form-label">Image:</label>
                                <input className="form-control" type="file" onChange={handleImageChange} />
                              </div>
                              <div className="mb-3">
                                <label className="form-label">Price:</label>
                                <input
                                  className="form-control"
                                  type="number"
                                  value={price}
                                  onChange={(e) => {
                                  const newPrice = parseInt(e.target.value);
                                  if (newPrice >= 0) {
                                      setPrice(newPrice)}}}/>
                              </div>
                              <div className="mb-3 d-flex align-items-center">
                                <label className="form-label me-3">Vegan:</label>
                                <div className="form-check">
                                  <input className="form-check-input" id="checkbox-input" type="checkbox" checked={vegan} onChange={(e) => setVegan(e.target.checked)} />
                                </div>
                              </div>
                              <div className="mb-3">
                                <label className="form-label">Category:</label>
                                <input className="form-control" type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                              </div>
                              <button className="btn btn-primary me-2" onClick={() => handleUpdate(menuItem._id)}>Update</button>
                              <button className="btn btn-secondary" onClick={handleCancelEdit}>Cancel</button>
                            </div>
                          ) : (
                            <div>
                              <h5 className="card-title">{menuItem.name}</h5>
                              <p className="card-text">{menuItem.description}</p>
                              <p className="card-text">Price: ${menuItem.price}</p>
                              <p className="card-text">{menuItem.vegan ? 'Vegan' : 'Non-Vegan'}</p>
                              <button className="btn btn-danger" onClick={() => handleDelete(menuItem._id)}>Delete</button>
                              <button className="btn btn-secondary ms-2" onClick={() => handleEdit(menuItem._id)}>Edit</button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuManagement;
