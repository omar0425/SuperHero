import React from "react";
import SuperHeroCard from "./SuperHeroCard";

export default function SuperHeroList({superHeroData, handleDelete}){
  const superHeroCards=superHeroData.map(hero =>{
    return <SuperHeroCard key={hero.id} hero={hero} handleDelete={handleDelete}/>
  })
  return(
    <div>
      <ul className="cards">
{superHeroCards}
      </ul>
    </div>
  )
}