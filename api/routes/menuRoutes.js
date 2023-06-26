const express = require("express");
const router = express.Router();
const cloudinary = require("../lib/cloudinary");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const menuController = require("../controllers/menuControllers");
const postControllers = require("../controllers/postControllers");
const categoriesControllers = require("../controllers/categoriesControllers");
const reservationsControllers = require("../controllers/reservationsControllers");
const loginController = require("../controllers/loginController");
const offersController = require("../controllers/offersController")


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


// MENU ROUTES

router.get("/menu", menuController.menu);
router.get("/menu/:id", menuController.menuById);
router.post(
  "/menu",
  upload.single("image"),
   menuController.createMenu
);
router.put(
  "/menu/:id",
  upload.single("image"),
   menuController.updateMenu
);
router.delete("/menu/:id",   menuController.deleteMenu);


// CATEGORIES ROUTES

router.get("/categories", categoriesControllers.homepage);
router.get("/categories/:id", categoriesControllers.homepageById);
router.post(
  "/categories",
  upload.single("image"),
  categoriesControllers.createCategory
);
router.put(
  "/categories/:id",
  upload.single("image"),
  categoriesControllers.updateCategory
);
router.delete(
  "/categories/:id",
  categoriesControllers.deleteCategory
);

// EVENTS ROUTES

router.post("/events", upload.single("image"), postControllers.createPost);
router.get("/events", postControllers.getPosts);
router.get("/events/:id", postControllers.getPostById);
router.put("/events/:id", upload.single("image"), postControllers.updatePost);
router.delete("/events/:id", postControllers.deletePost);


// RESERVATION ROUTES

router.get("/reservations",  reservationsControllers.getReservations);
router.get(
  "/reservations/:id",

  reservationsControllers.getReservationsById
);
router.get("/myReservation/:reservationID", reservationsControllers.getMyReservation)
router.delete(
  "/reservations/:id",

  reservationsControllers.deleteReservation
);
router.post("/reservations", reservationsControllers.createReservation);
router.patch("/updateMyReservation/:id", reservationsControllers.updateMyReservation)
// ADMIN ROUTES

router.post("/login", loginController.login);
router.get("/logout", loginController.logout);

// OFFER ROUTES

router.post("/setOffer", offersController.setOffer)
router.get("/getOffer", offersController.getOffer)


module.exports = router;
