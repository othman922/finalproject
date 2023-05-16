require("../connections/connection");

const Category = require("../models/Category");
const Menu = require("../models/Menu");
const User = require("../models/Users");
const Reservation = require("../models/Reservation");

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
    const image = req.files.image.name;

    req.files.image.mv(`${process.env.FILEDIR}/category/${image}`);

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

// UPDATE Category

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
    const image = req.files.image.name;

    req.files.image.mv(`${process.env.FILEDIR}/menu/${image}`);

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

// UPDATE Menu

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

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      withCredentials: true,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      withCredentials: true,
    });

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
