const express = require('express')
const router = express.Router()
const menuController = require('../controllers/menuControllers')

router.get('/', menuController.homepage)
router.get('/:id', menuController.homepageById)
router.get('/menu', menuController.menu)
router.get('/menu/:id', menuController.menuById)

router.post('/login', menuController.login)

// router.post('/search', recipeController.searchRecipe)



module.exports = router