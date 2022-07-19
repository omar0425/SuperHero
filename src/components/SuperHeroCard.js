import React from "react";

export default function SuperHeroCard({hero}){
  return(
<div className="card">
  <img src={hero.url} alt={hero.name}></img>
  <h4>{hero.name}</h4>
  <p>First Appearance: {hero.firstappearance}</p>
  <p>Publisher: {hero.publisher}</p>

</div>
  )

}