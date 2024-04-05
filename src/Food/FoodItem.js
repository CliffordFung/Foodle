import React, { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import '../styles/foodItem.css'

export default function FoodItem({ foodData }) {
  const [showOrigin, setShowOrigin] = useState(false)
  const [showIngredients, setShowIngredients] = useState(false)
  const [showLetters, setShowLetters] = useState(false)
  const [input, setInput] = useState('')
  const [submittedAnswer, setSubmittedAnswer] = useState(undefined)
  const [lettersHint, setLettersHint] = useState('')

  useEffect(() => {
    setShowOrigin(false)
    setShowIngredients(false)
    setShowLetters(false)
    setInput('')
    setSubmittedAnswer(undefined)

    const replaceLetters = foodData.name
      ?.split(' ')
      .map((word) => {
        const firstLetter = word.charAt(0)
        const remainingLetters = word.slice(1).replace(/./g, ' _ ')
        return firstLetter + remainingLetters
      })
      .join('   ')
    setLettersHint(replaceLetters)
  }, [foodData])

  function handleInputChange(e) {
    setInput(e.target.value)
  }

  function handleSubmit() {
    if (input.toLowerCase() === foodData.name.toLowerCase()) {
      setSubmittedAnswer(
        <>
          <Confetti recycle={false} numberOfPieces={300} tweenDuration={5000} />
          <span>That's correct! The answer is {foodData.name}</span>
        </>
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
        <Zoom>
          <img src={foodData?.imgUrl} alt="Food Item" />
        </Zoom>
      </div>
      <div className="guess-layout">
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
              <span style={{ whiteSpace: 'pre' }}>{lettersHint}</span>
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
