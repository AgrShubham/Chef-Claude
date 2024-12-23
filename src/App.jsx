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

      <ul>{listOfIngredient}</ul>
      
      <label className="description" htmlFor="description">
        Description :
        <textarea name="description" id="description"></textarea>
      </label>
      
      
      <fieldset className="r-buttons">
      <label >
      <input type="radio" name="category" value="General" />
        General
      </label>

      <label >
      <input type="radio" name="category" value="OBC" />
        OBC
      </label>

      <label >
      <input type="radio" name="category" value="ST" />
        ST
      </label>

      <label >
      <input type="radio" name="category" value="SC" />
        SC
      </label>

      <label >
      <input type="radio" name="category" value="Others" />
      Others
      </label>
      </fieldset>

      </>
    
  )
}

export default App;
