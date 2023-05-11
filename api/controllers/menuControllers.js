require('../connections/connection')
const Category = require('../models/Category')
const Menu = require('../models/Menu')
const User = require('../models/Users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Get Homepage

exports.homepage = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ein Fehler ist aufgetreten.');
  }
};

//Get Menu

exports.menu = async (req, res) => {
  try {
    const menu = await Menu.find({}).populate('category');
    res.status(200).json(menu);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ein Fehler ist aufgetreten.');
  }
};

//Admin created

const createAdmin = async () => {
  const admin = new User({
    email: process.env.ADMIN_EMAIL,
    password: await bcrypt.hash(process.env.ADMIN_PASSWORD, Number(process.env.PASSWORD_SALT)),
    isAdmin: true
  });

  await admin.save();
  console.log('Admin erstellt.');
};

createAdmin();

//Post login

exports.login = async (req, res) => {

  const { email, password } = req.body;

  try {

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid user' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET);
    return res.json({ token });
        
  } catch (error) {
    console.error(error);
    res.status(500).send('Ein Fehler ist aufgetreten.');
  }
};

