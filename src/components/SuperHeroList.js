import React from "react";
import SuperHeroCard from "./SuperHeroCard";

export default function SuperHeroList({superHeroData}){
  const superHeroCards=superHeroData.map(hero =>{
    return <SuperHeroCard key={hero.id} hero={hero}/>
  })
  return(
    <div>
      <ul className="cards">
{superHeroCards}
      </ul>
    </div>
  )
}