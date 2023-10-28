import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  const initialFormState = {
    name: "Name",
    cuisine: "Cuisine",
    photo: "URL",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", formData.name, formData.cuisine, formData.photo, formData.ingredients, formData.preparation);
    createRecipe(formData);
    setFormData({...initialFormState})
  }



  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody className="highlight">
          <tr >
            <td><input
              id="name"
              type="Text"
              name="name"
              onChange={handleChange}
              value={formData.name}
            /></td>
            <td><input
              id="cuisine"
              type="Text"
              name="cuisine"
              onChange={handleChange}
              value={formData.cuisine}
            /></td>
            <td><input
              id="photo"
              type="URL"
              name="photo"
              onChange={handleChange}
              value={formData.photo}
            /></td>
            <td><textarea 
            id="ingredients" 
            name="ingredients" 
            onChange={handleChange}    
            value={formData.ingredients}  rows={3} defaultValue="Ingredients"/></td>
            <td><textarea 
            id="preparation" 
            name="preparation" 
            onChange={handleChange}
            value={formData.preparation}  
            rows={3} 
            defaultValue="Preparation"/></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
          
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
