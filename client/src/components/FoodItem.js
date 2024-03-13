import '../styles/foodItem.css'

export default function FoodItem({ foodData }) {
  return (
    <div className="food-container">
      <img src="logo512.png" alt="Food Item" />
      <h3>Hints:</h3>
      <label>Country of Origin: </label>
      <label>Ingredients: </label>
      <div className="inline">
        <label htmlFor="food-input">Guess:</label>
        <input type="text" id="food-input" />
      </div>
    </div>
  )
}
