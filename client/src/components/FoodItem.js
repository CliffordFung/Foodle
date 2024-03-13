import React, { useState } from 'react'
import '../styles/foodItem.css'

export default function FoodItem({ foodData }) {
  const [showOrigin, setShowOrigin] = useState(false)
  const [showIngredients, setShowIngredients] = useState(false)
  const [showLetters, setShowLetters] = useState(false)

  return (
    <div>
      <div className="food-container">
        <img src="logo512.png" alt="Food Item" />
      </div>
      <div className="guess-container">
        <label htmlFor="food-input">Guess:</label>
        <input type="text" id="food-input" />
      </div>
      <div className="hint-layout">
        <div className="hint-container">
          <h3>Hints:</h3>
          <div className="hint-item">
            <label>Country of Origin:</label>
            {showOrigin ? (
              <span>{foodData.origin}</span>
            ) : (
              <div>
                <button onClick={() => setShowOrigin(true)}>
                  Click to Reveal
                </button>
              </div>
            )}
          </div>
          <div className="hint-item">
            <label>Ingredients:</label>
            {showIngredients ? (
              <span>{foodData.ingredients.join(', ')}</span>
            ) : (
              <div>
                <button onClick={() => setShowIngredients(true)}>
                  Click to Reveal
                </button>
              </div>
            )}
          </div>
          <div className="hint-item">
            <label>Starting Letters:</label>
            {showLetters ? (
              <span>{foodData.name}</span>
            ) : (
              <div>
                <button onClick={() => setShowLetters(true)}>
                  Click to Reveal
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
