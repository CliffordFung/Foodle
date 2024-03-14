import React, { useState, useEffect } from 'react'
import '../styles/foodItem.css'

export default function FoodItem({ foodData }) {
  const [showOrigin, setShowOrigin] = useState(false)
  const [showIngredients, setShowIngredients] = useState(false)
  const [showLetters, setShowLetters] = useState(false)
  const [input, setInput] = useState('')
  const [submittedAnswer, setSubmittedAnswer] = useState(undefined)

  useEffect(() => {
    setShowOrigin(false)
    setShowIngredients(false)
    setShowLetters(false)
    setInput('')
    setSubmittedAnswer(undefined)
  }, [foodData])

  function handleInputChange(e) {
    setInput(e.target.value)
  }

  function handleSubmit() {
    if (input.toLowerCase() === foodData.name.toLowerCase()) {
      setSubmittedAnswer(
        <span>That's correct! The answer is {foodData.name}</span>
      )
    } else {
      setSubmittedAnswer(<span>{input} is not correct. Try again!</span>)
    }
    setInput('')
  }

  function handleShowAnswer() {
    setSubmittedAnswer(<span>The correct answer is {foodData.name}</span>)
  }

  return (
    <div>
      <div className="food-container">
        <img src="logo512.png" alt="Food Item" />
      </div>
      <div className="guess-container">
        <label htmlFor="food-input">Guess:</label>
        <input
          type="text"
          id="food-input"
          onChange={handleInputChange}
          value={input}
        />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleShowAnswer} style={{ marginLeft: '12px' }}>
          Give Up?
        </button>
      </div>
      <div className="answer-container">{submittedAnswer}</div>
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
