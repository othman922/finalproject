require("../lib/connection");
const cloudinary = require("../lib/cloudinary");
const Menu = require("../models/Menu");
const mongoose = require("mongoose");

// GET Menu

exports.menu = async (req, res) => {
    try {
    const menu = await Menu.find({}).populate("category");
    res.status(200).json(menu);
  } catch (error) {
    console.error(error);
    res.status(500).send("Ein Fehler ist aufgetreten.");
  }
};

// GET Menu by ID

exports.menuById = async (req, res) => {
  try {
    Menu.find().maxTimeMS(20000);

    const menu = await Menu.findById(req.params.id).populate("category");

    if (!menu) {
      return res.status(404).send("Menu not found");
    }

    res.status(200).json(menu);
  } catch (error) {
    console.error(error);
    res.status(500).send("Ein Fehler ist aufgetreten.");
  }
};

// POST Menu

exports.createMenu = async (req, res) => {
  try {
    const { name, description, price, vegan, category } = req.body;
    const image = req.file.path;

    const menu = new Menu({
      name,
      description,
      price,
      image,
      vegan,
      category,
    });

    const uploadImage = await cloudinary.uploader.upload(req.file.path, {
      public_id: `menu_${menu._id}`,
      folder: `menu/${menu.name}`,
    });

    menu.image = uploadImage.secure_url;

    await menu.save();

    res.status(201).json(menu);
  } catch (error) {
    console.error(error);
    res.status(500).send("Ein Fehler ist aufgetreten.");
  }
};

// UPDATE Menu

exports.updateMenu = async (req, res) => {
  try {
    const { name, description, price, vegan, category } = req.body;

    const existingMenu = await Menu.findById(req.params.id);

    if (!existingMenu) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    // Lösche das alte Bild von Cloudinary, falls vorhanden
    if (existingMenu.image) {
      const publicId = existingMenu.image.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(publicId);
    }

    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        folder: `menu/${name}`,
      });
      existingMenu.image = uploadResult.secure_url;
    }

    existingMenu.name = name;
    existingMenu.description = description;
    existingMenu.price = price;
    existingMenu.vegan = vegan;
    existingMenu.category = category;

    const updatedMenu = await existingMenu.save();

    res.status(200).json(updatedMenu);
  } catch (error) {
    console.error(error);
    res.status(500).send("Ein Fehler ist aufgetreten.");
  }
};

// DELETE Menu

exports.deleteMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await Menu.findByIdAndDelete(id);

    res.status(200).json(menu);
  } catch (error) {
    console.error(error);
    res.status(500).send("Ein Fehler ist aufgetreten.");
  }
};

