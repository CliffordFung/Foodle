const express = require('express')
const router = express.Router()
const FoodItem = require('../models/foodItemsSchema')

let previousFoodItemsId = []

// get a single food item by random
router.get('/', async (req, res) => {
  try {
    const foodItem = await FoodItem.aggregate([
      { $match: { _id: { $nin: previousFoodItemsId } } },
      { $sample: { size: 1 } },
    ])
    const dish = foodItem[0]

    previousFoodItemsId.push(dish._id)
    if (previousFoodItemsId.length > 1) {
      previousFoodItemsId = []
    }

    res.json(dish)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
