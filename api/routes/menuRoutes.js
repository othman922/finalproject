const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuControllers");
const isAdmin = require("../middlewares/isAdmin")

router.get("/menu", menuController.menu);
router.get("/menu/:id", menuController.menuById);
router.post("/menu", isAdmin, menuController.createMenu);
router.put("/menu/:id", isAdmin, menuController.updateMenu);
router.delete("/menu/:id", isAdmin, menuController.deleteMenu);

router.get("/", menuController.homepage);
router.get("/:id", menuController.homepageById);
router.post("/", isAdmin, menuController.createCategory);
router.put("/:id", isAdmin, menuController.updateCategory);
router.delete("/:id", isAdmin, menuController.deleteCategory);

router.post("/login", menuController.login);

// router.post('/search', recipeController.searchRecipe)
// comment

module.exports = router;
