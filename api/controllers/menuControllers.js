require('../connections/connection')
const Category = require('../models/Category')
const Menu = require('../models/Menu')

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
