const express = require('express')
const router = express.Router()
const menuController = require('../controllers/menuControllers')

router.get('/', menuController.homepage)

// router.post('/search', recipeController.searchRecipe)



module.exports = router