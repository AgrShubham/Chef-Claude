import React from "react";

function App() {
  const [ingredient, setIngredient] = React.useState([]);

  const listOfIngredient = ingredient.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function getIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    console.log(ingredient);
    setIngredient((prevIngredient) => [...prevIngredient, newIngredient]);
  }

  return (
    <>
      <form className="add-ingredient-form" action={getIngredient}>
        <input
          type="text" 
          name="ingredient"
          placeholder="eg: cheese"
          aria-label="Add ingredients"
        />
        <button>Add ingredient</button>
      </form>

      {ingredient.length > 0 && (
        <section>
          <div className="ingredient-list-div">

          <h1>Ingredients on hand : </h1>

          <ul className="ingredient-list">{listOfIngredient}</ul>
          </div>

          <div className="recipe-button-div">
            <div>
            <h2>Ready for a recipe?</h2>
            <p>Generate a recipe from your list of ingredient.</p>
            </div>
            <button className="get-recipe-button">Get a recipe</button>
          </div>
        </section>
      )}
    </>
  );
}

export default App;
