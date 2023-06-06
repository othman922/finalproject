require("../lib/connection");
const Category = require("../models/Category");
const cloudinary = require("../lib/cloudinary");
const mongoose = require("mongoose");

// GET Homepage

exports.homepage = async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (error) {
      console.error(error);
      res.status(500).send("Ein Fehler ist aufgetreten.");
    }
  };
  
  // GET Homepage by ID
  
  exports.homepageById = async (req, res) => {
    try {
      const categories = await Category.findOne({ _id: req.params.id });
  
      if (!categories) {
        return res.status(404).send("Categories not found");
      }
  
      res.status(200).json(categories);
    } catch (error) {
      console.error(error);
      res.status(500).send("Ein Fehler ist aufgetreten.");
    }
  };
  
  // POST Category
  
  exports.createCategory = async (req, res) => {
    try {
      const { name } = req.body;
      const image = req.file.path;
  
      const category = new Category({
        name,
        image,
      });
  
      const uploadImage = await cloudinary.uploader.upload(req.file.path, {
        public_id: `category_${category._id}`,
        folder: `category/${category.name}`,
      });
  
      category.image = uploadImage.secure_url;
  
      await category.save();
  
      res.status(201).json(category);
    } catch (error) {
      console.error(error);
      res.status(500).send("Ein Fehler ist aufgetreten.");
    }
  };
  
  // UPDATE Category
  
  exports.updateCategory = async (req, res) => {
    try {
      const { name } = req.body;
  
      const existingCategory = await Category.findById(req.params.id);
  
      if (!existingCategory) {
        return res.status(404).json({ message: "Category item not found" });
      }
  
      // Lösche das alte Bild von Cloudinary, falls vorhanden
      if (existingCategory.image) {
        const publicId = existingCategory.image.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(publicId);
      }
  
      if (req.file) {
        const uploadResult = await cloudinary.uploader.upload(req.file.path, {
          folder: `category/${name}`,
        });
        existingCategory.image = uploadResult.secure_url;
      }

      existingCategory.name = name;
  
      const updatedCategory = await existingCategory.save();
  
      res.status(200).json(updatedCategory);
    } catch (error) {
      console.error(error);
      res.status(500).send("Ein Fehler ist aufgetreten.");
    }
  };

  
  // DELETE a category
  
  exports.deleteCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findByIdAndDelete(id);
  
      res.status(200).json(category);
    } catch (error) {
      console.error(error);
      res.status(500).send("Ein Fehler ist aufgetreten.");
    }
  };