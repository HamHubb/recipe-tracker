import React from "react";


function RecipeList({recipes, deleteRecipe}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  // const RecipeData = [
  //   {
  //     name: "Tuna Poke with Mango",
  //     cuisine: "Hawaiian",
  //     photo: "https://www.foodista.com/sites/default/files/styles/recype/public/tunapokebowlwithmango22.jpg",
  //     ingredients: "1 package of sushi grade tuna. 1 cup cooked quinoa ½ avocado, sliced. ½ mango, cubed. 1 shredded carrot. 1 small sliced cucumber. poke sauce.",
  //     preparation: "1. Chop tuna into cubes. 2. Toss with 1 tbsp sesame oil and 1 tbsp tamari. Set aside. 3. Layer your poke bowl starting with quinoa. 4. Whisk all poke sauce ingredients in a bowl and pour over the poke bowl. 5. Garnish with sesame seeds and furikake. 6. Top with chopped scallions."
  //   },
  //   {
  //     name: "Guacamole",
  //     cuisine: "Mexican",
  //     photo: "https://www.foodista.com/sites/default/files/styles/recype/public/017.jpg",
  //     ingredients: "3 ripe avocados. ¾ cup finely chopped Roma tomato. 2 serrano chiles very finely chopped (seeded and deveined). 3 heaping tablespoons of finely chopped onion. 3 tablespoons of minced cilantro. Salt to taste",
  //     preparation: "1. Remove the flesh of the avocados. 2. Mash the avocados with the back of a fork. 3. Add the other ingredients and incorporate evenly. 4. Add salt to taste."
  //   },
    
  // ];

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((current, index) => <tr key={index}>
            <td>{current.name}</td>
            <td>{current.cuisine}</td>
            <td><img src={current.photo} alt="cuisinePhoto" /></td>
            <td>{current.ingredients}</td>
            <td>{current.preparation}</td>
            <td>
              <button name="delete" onClick={()=>deleteRecipe(index)}>Delete</button>
            </td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
