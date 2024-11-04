"use client";
import { useState, useEffect } from "react";
import "./styles.css";

function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null); 


  async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  }

 
  async function fetchMealDetails(mealId) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    return data.meals[0] || null;
  }


  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient).then(setMeals);
      setSelectedMeal(null); 
    }
  }, [ingredient]);


  const handleMealClick = (meal) => {
    fetchMealDetails(meal.idMeal).then(setSelectedMeal);
  };

  return (
    <div className="meal-ideas">
      <h2>Meal Ideas</h2>
      {ingredient && <p>Here are some meal ideas using {ingredient}:</p>}
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal} onClick={() => handleMealClick(meal)} style={{ cursor: 'pointer', color: 'blue' }}>
            {meal.strMeal}
          </li>
        ))}
      </ul>
      {selectedMeal && (
        <div className="meal-details">
          <h3>{selectedMeal.strMeal}</h3>
          <p>Ingredients needed:</p>
          <ul>
            {Array.from({ length: 20 }).map((_, i) => {
              const ingredient = selectedMeal[`strIngredient${i + 1}`];
              const measure = selectedMeal[`strMeasure${i + 1}`];
              return ingredient ? (
                <li key={i}>
                  {ingredient} - {measure}
                </li>
              ) : null;
            })}
          </ul>
          <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} width="200" />
        </div>
      )}
    </div>
  );
}

export default MealIdeas;
