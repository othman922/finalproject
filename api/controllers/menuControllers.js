require("../connections/connection");

const Category = require("../models/Category");
const Menu = require("../models/Menu");
const User = require("../models/Users");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Admin created

// const createAdmin = async () => {
//   const admin = new User({
//     email: process.env.ADMIN_EMAIL,
//     password: await bcrypt.hash(process.env.ADMIN_PASSWORD, Number(process.env.PASSWORD_SALT)),
//     isAdmin: true
//   });

//   await admin.save();
//   console.log('Admin erstellt.');
// };

// createAdmin();

//Get Homepage

exports.homepage = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).send("Ein Fehler ist aufgetreten.");
  }
};

//Get Homepage by ID

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

//Post Category create

exports.createCategory = async (req, res) => {
  try {
    const { name, image } = req.body;

    const category = new Category({
      name,
      image,
    });

    await category.save();

    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).send("Ein Fehler ist aufgetreten.");
  }
};

// Put Category update

exports.updateCategory = async (req, res) => {
  try {
    const { name, image } = req.body;

    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { name, image },
      { new: true }
    );

    res.status(200).json(updatedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).send("Ein Fehler ist aufgetreten.");
  }
};

//Delete a category

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

//Get Menu

exports.menu = async (req, res) => {
  try {
    const menu = await Menu.find({}).populate("category");
    res.status(200).json(menu);
  } catch (error) {
    console.error(error);
    res.status(500).send("Ein Fehler ist aufgetreten.");
  }
};

//Get Menu by ID

exports.menuById = async (req, res) => {
  try {
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

//Post Menu

exports.createMenu = async (req, res) => {
  try {
    const { name, description, price, image, vegan, category } = req.body;

    const menu = new Menu({
      name,
      description,
      price,
      image,
      vegan,
      category,
    });

    await menu.save();

    res.status(201).json(menu);
  } catch (error) {
    console.error(error);
    res.status(500).send("Ein Fehler ist aufgetreten.");
  }
};

//Update Menu

exports.updateMenu = async (req, res) => {
  try {
    const { name, description, price, image, vegan, category } = req.body;

    const updatedMenu = await Menu.findByIdAndUpdate(
      req.params.id,
      { name, description, price, image, vegan, category },
      { new: true }
    ).populate("category");

    res.status(200).json(updatedMenu);
  } catch (error) {
    console.error(error);
    res.status(500).send("Ein Fehler ist aufgetreten.");
  }
};

//Delete Menu

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

//Post login

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid user" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { userId: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );
    return res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Ein Fehler ist aufgetreten.");
  }
};
