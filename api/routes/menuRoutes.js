const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuControllers");
const isAdmin = require("../middlewares/isAdmin");
const auth = require("../middlewares/isAuth");
const cloudinary = require("../lib/cloudinary");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

//Cloudinary delete storage

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "delete",
    resource_type: "auto",
  },
});

//CLoudinary upload image types

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/gif" ||
      file.mimetype == "video/mpeg" ||
      file.mimetype == "video/mp4"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg, .jpeg and .gif format allowed!"));
    }
  },
});

router.get("/menu", menuController.menu);
router.get("/menu/:id", menuController.menuById);
router.post(
  "/menu",
  upload.single("image"),
  /*auth, isAdmin,*/ menuController.createMenu
);
router.put(
  "/menu/:id",
  upload.single("image"),
  /*auth, isAdmin,*/ menuController.updateMenu
);
router.delete("/menu/:id", /*auth, isAdmin,*/ menuController.deleteMenu);

router.get("/categories", menuController.homepage);
router.get("/categories/:id", menuController.homepageById);
router.post(
  "/categories",
  upload.single("image"),
  /*auth, isAdmin,*/ menuController.createCategory
);
router.put(
  "/categories/:id",
  upload.single("image"),
  /*auth, isAdmin,*/ menuController.updateCategory
);
router.delete(
  "/categories/:id",
  /*auth, isAdmin,*/ menuController.deleteCategory
);

router.get("/reservations", /*auth, isAdmin,*/ menuController.getReservations);
router.get(
  "/reservations/:id",
  /*auth, isAdmin,*/
  menuController.getReservationsById
);
router.delete(
  "/reservations/:id",
  /*auth, isAdmin,*/
  menuController.deleteReservation
);
router.post("/reservations", menuController.createReservation);

router.post("/login", menuController.login);
router.get("/logout", menuController.logout);

// router.post('/search', recipeController.searchRecipe)
// comment

module.exports = router;
