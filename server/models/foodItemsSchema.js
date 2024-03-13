const mongoose = require('mongoose')

const foodItemsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    origin: { type: String, required: true },
    img_url: { type: String, required: true },
    ingredients: { type: [String], required: true },
  },
  { collection: 'food_items' }
)

module.exports = mongoose.model('foodItem', foodItemsSchema)
