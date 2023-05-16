const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuControllers");
const isAdmin = require("../middlewares/isAdmin");
const auth = require("../middlewares/isAuth");

router.get("/menu", menuController.menu);
router.get("/menu/:id", menuController.menuById);
router.post("/menu", auth, isAdmin, menuController.createMenu);
router.put("/menu/:id", auth, isAdmin, menuController.updateMenu);
router.delete("/menu/:id", auth, isAdmin, menuController.deleteMenu);

router.get("/categories", menuController.homepage);
router.get("/categories/:id", menuController.homepageById);
router.post("/categories", menuController.createCategory);
router.put("/categories/:id", menuController.updateCategory);
router.delete("/categories/:id", auth, isAdmin, menuController.deleteCategory);

router.get("/reservations", auth, isAdmin, menuController.getReservations);
router.get(
  "/reservations/:id",
  auth,
  isAdmin,
  menuController.getReservationsById
);
router.delete(
  "/reservations/:id",
  auth,
  isAdmin,
  menuController.deleteReservation
);
router.post("/reservations", menuController.createReservation);

router.post("/login", menuController.login);
router.get("/logout", menuController.logout);

// router.post('/search', recipeController.searchRecipe)
// comment

module.exports = router;
