const User = require("../models/Users");

const isAdmin = async (req, res, next) => {
  try {
    if (!req.user || !req.user.userId) {
      return res.status(401).json({ message: 'You are not authorized to perform this action.' });
    }

    const user = await User.findById(req.user.userId);

    if (!user.isAdmin) {
      return res.status(401).json({ message: 'You are not authorized to perform this action.' });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).send('Ein Fehler ist aufgetreten.');
  }
};

module.exports = isAdmin;