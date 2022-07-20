import React,{useState} from "react";

export default function NewSuperHeroForm({addSuperHero}){
const[formData,setFormData] = useState({
  "id": "",
  "name": "",
  "url": "",
  "firstappearance": "",
  "publisher": ""
})
console.log(formData)
function handleChange(event){
  setFormData(prevFormData =>{
    return {...prevFormData,[event.target.name]: event.target.value
  }})
}
 
  return(
    <div className="new-superhero-form">
      <h2>Add Your Own Super Hero 🦸‍♀️ </h2>
      <form onSubmit={()=>{console.log(`submitting form`)}}>

       
        <input 
        type="text" 
        name="name" 
        placeholder="Super Hero name" 
        value ={formData.superHeroName}
        onChange={handleChange} 
        />
        <input 
        type="text" 
        name="image" 
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
        
        <button type="submit">Add SuperHero</button>
      </form>
    </div>
  );
  
}