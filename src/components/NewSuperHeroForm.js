import React,{useState} from "react";

export default function NewSuperHeroForm({addSuperHero}){
const[formData,setFormData] = useState({
  
  "name": "",
  "url": "",
  "firstappearance": "",
  "publisher": ""
})

function handleChange(event){
  setFormData(prevFormData =>{
    return {...prevFormData,[event.target.name]: event.target.value
  }})
}
function handleSubmit(e){
  e.preventDefault()
  addSuperHero(formData)
}

  return(
    <div className="new-superhero-form">
      <h2 className="add">Add Your Own Super Hero 🦸‍♀️ </h2>
      <div className="input">
      <form onSubmit={handleSubmit}
       >
        <input 
        type="text" 
        name="name" 
        placeholder="Super Hero name" 
        value ={formData.superHeroName}
        onChange={handleChange} 
        />
        <input 
        type="text" 
        name="url" 
        placeholder="Image url" 
        value={formData.url}
        onChange={handleChange}
        />
        <input 
        type="text" 
        name="firstappearance" 
        placeholder="First Appearance" 
        value={formData.firstappearance}
        onChange={handleChange}
        />
        <input 
        type="text" 
        name="publisher" 
        placeholder="Publisher" 
         value={formData.publisher}
        onChange={handleChange}
        />
        
        <button className="submit" type="submit">Add SuperHero</button>
      </form>
      </div>
    </div>
  );
  
}