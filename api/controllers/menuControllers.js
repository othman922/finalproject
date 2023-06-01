require("../lib/connection");
const cloudinary = require("../lib/cloudinary");

const Category = require("../models/Category");
const Menu = require("../models/Menu");
const User = require("../models/Users");
const Reservation = require("../models/Reservation");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
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

    /* if (req.files && req.files.image) {
      const image = req.files.image.name;

      if (existingCategory.image) {
        fs.unlink(
          `${process.env.FILEDIR}/category/${existingCategory.image}`,
          (err) => {
            if (err) {
              console.error(err);
            }
          }
        );
      }

      req.files.image.mv(`${process.env.FILEDIR}/category/${image}`);
      existingCategory.image = image;
    } */

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

// GET Menu

exports.menu = async (req, res) => {
  console.log(await mongoose.connection.db.listCollections());
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

    /* if (req.files && req.files.image) {
      const image = req.files.image.name;

      if (existingMenu.image) {
        fs.unlink(
          `${process.env.FILEDIR}/menu/${existingMenu.image}`,
          (err) => {
            if (err) {
              console.error(err);
            }
          }
        );
      }

      req.files.image.mv(`${process.env.FILEDIR}/menu/${image}`);
      existingMenu.image = image;
    } */

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

// GET Reservations

exports.getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    console.error(error);
    res.status(500).send("Ein Fehler ist aufgetreten.");
  }
};

// GET Reservations by ID

exports.getReservationsById = async (req, res) => {
  try {
    const reservations = await Reservation.findOne({ _id: req.params.id });

    if (!reservations) {
      return res.status(404).send("Reservations not found");
    }

    res.status(200).json(reservations);
  } catch (error) {
    console.error(error);
    res.status(500).send("Ein Fehler ist aufgetreten.");
  }
};

// POST Reservation

exports.createReservation = async (req, res) => {
  try {
    const { date, people, time, email, name, telephone, extra } = req.body;

    const reservation = new Reservation({
      date,
      people,
      time,
      email,
      name,
      telephone,
      extra,
    });

    await reservation.save();

    // await sendEmailNotification(reservation);

    res.status(201).json(reservation);
  } catch (error) {
    console.error(error);
    res.status(500).send("Ein Fehler ist aufgetreten.");
  }
};

// DELETE Reservation

exports.deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await Reservation.findByIdAndDelete(id);

    res.status(200).json(reservation);
  } catch (error) {
    console.error(error);
    res.status(500).send("Ein Fehler ist aufgetreten.");
  }
};

// POST Login

exports.login = async (req, res) => {
  const { email, password } = req.body;

  console.log("Received email:", email);
  console.log("Received password:", password);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid user" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const accessToken = jwt.sign(
      { userId: user._id, isAdmin: user.isAdmin },
      process.env.JWT_KEY,
      { expiresIn: "30m" }
    );

    const refreshToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_REFRESH_KEY,
      { expiresIn: "1w" }
    );

    res.cookie("accessToken", accessToken);
    res.cookie("refreshToken", refreshToken);

    res.send({ user, accessToken, refreshToken });
  } catch (error) {
    console.error(error);
    res.status(500).send("Ein Fehler ist aufgetreten.");
  }
};

// GET Logout

exports.logout = async (req, res, next) => {
  const decodedUser = jwt.decode(req.cookies.accessToken);

  try {
    await User.updateOne(
      { userId: decodedUser.userId },
      { $set: { JWT_REFRESH_KEY: null } }
    );
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    res.status(200).send("logged out");
  } catch (error) {
    console.log(error);
  }
};
