require('../connections/connection')
const Category = require('../models/Category')

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
