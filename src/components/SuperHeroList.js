import React from "react";
import SuperHeroCard from "./SuperHeroCard";

export default function SuperHeroList({filteredHeros}){
  const superHeroCards=filteredHeros.map(hero =>{
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