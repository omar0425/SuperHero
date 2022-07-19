import React from "react";

export default function NewSuperHeroForm(){
  return(
    <div className="new-superhero-form">
      <h2>Add Your Own Super Hero 🦸‍♀️ </h2>
      <form >
      {/* onSubmit={handleSubmit} */}
        <input 
        type="text" 
        name="name" 
        placeholder="SuperHero name" 
        // onChange={handleChange} 
        />
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL" 
        // onChange={handleChange}
        />
        <input 
        type="text" 
        name="First-Appearance" 
        placeholder="First Appearance" 
        // onChange={handleChange}
        />
                <input 
        type="text" 
        name="Publisher" 
        placeholder="Publisher" 
        // onChange={handleChange}
        />
        <button type="submit">Add SuperHero</button>
      </form>
    </div>
  );
  
}