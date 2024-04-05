import React, { useEffect, useState } from 'react'
import FoodItem from './Food/FoodItem'
import './styles/App.css'
import { FOOD_ITEMS } from './Food/foodData'

export default function App() {
  const [foodItem, setFoodItem] = useState({})
  const [cache, setCache] = useState(new Set())
  const [isLoadNewDish, setIsLoadNewDish] = useState(false)

  useEffect(() => {
    if (cache.size === FOOD_ITEMS.length) {
      setCache(cache.clear())
    }
    let randomIndex
    do {
      randomIndex = Math.floor(Math.random() * FOOD_ITEMS.length)
    } while (cache.has(randomIndex))

    setCache(cache.add(randomIndex))
    setFoodItem(FOOD_ITEMS[randomIndex])
  }, [isLoadNewDish, cache])

  return (
    <div className="root">
      <div className="header">
        <img src="hamburger.png" alt="Hamburger Icon" />
        <div className="center-container">
          <h1>Foodle</h1>
          <h2>Guess the name of popular dishes around the world!</h2>
        </div>
        <img src="fries.png" alt="Hamburger Icon" />
      </div>
      <FoodItem foodData={foodItem} />
      <div className="dish-button-container">
        <button onClick={() => setIsLoadNewDish((prev) => !prev)}>
          Load New Dish
        </button>
      </div>
    </div>
  )
}
