import React,{useState, useEffect} from "react";
import NewSuperHeroForm from "./NewSuperHeroForm";

import SuperHeroList from "./SuperHeroList";

export default function SuperHeroPage() {

  
  const [superHeroData, setSuperHeroData] = useState([])
  
  
  function addSuperHero(newSuperHero){
    
    const superPost = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(newSuperHero)
      }
      fetch(`http://localhost:3000/heros`,superPost)
      .then(res =>res.json())
      .then(newSuperHero => setSuperHeroData([...superHeroData,newSuperHero]))
      
    }

  

useEffect(() =>{
fetch(`http://localhost:3000/heros`)
.then(res => res.json())
.then(data => {setSuperHeroData(data)})
},[])


return (
  <div>
  <NewSuperHeroForm addSuperHero={addSuperHero}/>
  <SuperHeroList superHeroData={superHeroData}/>
  </div>
)}