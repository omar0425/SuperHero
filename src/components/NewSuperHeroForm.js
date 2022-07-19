import React,{useState} from "react";

export default function NewSuperHeroForm({addSuperHero}){

 
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
        placeholder="Image url" 
        // onChange={handleChange}
        />
        <input 
        type="text" 
        name="firstappearance" 
        placeholder="First Appearance" 
        // onChange={handleChange}
        />
                <input 
        type="text" 
        name="publisher" 
        placeholder="Publisher" 
        // onChange={handleChange}
        />
        <button type="submit">Add SuperHero</button>
      </form>
    </div>
  );
  
}