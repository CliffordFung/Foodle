import React, { useEffect, useState } from 'react'
import FoodItem from './components/FoodItem'
import './styles/App.css'

export default function App() {
  const [foodItem, setFoodItem] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/foodItem')
        const res = response.json()
        setFoodItem(res)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="root">
      <div className="container">
        <h1>Foodle</h1>
        <FoodItem foodData={foodItem} />
      </div>
    </div>
  )
}
