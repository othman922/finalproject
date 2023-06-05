require("../lib/connection");
const User = require("../models/Users");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

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
  