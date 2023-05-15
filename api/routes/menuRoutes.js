const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuControllers")
const isAdmin = require("../middlewares/isAdmin")
const auth = require('../middlewares/isAuth')

router.get("/menu", menuController.menu);
router.get("/menu/:id", menuController.menuById);
router.post("/menu", auth, isAdmin, menuController.createMenu);
router.put("/menu/:id", auth, isAdmin, menuController.updateMenu);
router.delete("/menu/:id", auth, isAdmin, menuController.deleteMenu);

router.get("/", menuController.homepage);
router.get("/:id", menuController.homepageById);
router.post("/", auth, isAdmin, menuController.createCategory);
router.put("/:id", auth, isAdmin, menuController.updateCategory);
router.delete("/:id", auth, isAdmin, menuController.deleteCategory);

router.post("/login", menuController.login);

// router.post('/search', recipeController.searchRecipe)
// comment

module.exports = router;
