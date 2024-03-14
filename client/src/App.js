import React, { useEffect, useState } from 'react'
import FoodItem from './components/FoodItem'
import './styles/App.css'

export default function App() {
  const [foodItem, setFoodItem] = useState({})
  const [isLoadNewDish, setIsLoadNewDish] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/foodItem')
        const res = await response.json()
        setFoodItem(res)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [isLoadNewDish])

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
