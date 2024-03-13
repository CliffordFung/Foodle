const express = require('express')
const router = express.Router()
const FoodItem = require('../models/foodItemsSchema')

let previousFoodItems = []

// get a single food item by random
router.get('/', async (req, res) => {
  try {
    const foodItem = await FoodItem.find()
    res.json(foodItem)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
