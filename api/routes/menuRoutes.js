const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuControllers");

router.get("/menu", menuController.menu);
router.get("/menu/:id", menuController.menuById);
router.post("/menu", menuController.createMenu);
router.put("/menu/:id", menuController.updateMenu);
router.delete("/menu/:id", menuController.deleteMenu);

router.get("/", menuController.homepage);
router.get("/:id", menuController.homepageById);
router.post("/", menuController.createCategory);
router.put("/:id", menuController.updateCategory);
router.delete("/:id", menuController.deleteCategory);

router.post("/login", menuController.login);

// router.post('/search', recipeController.searchRecipe)
// comment

module.exports = router;
