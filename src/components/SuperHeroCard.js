import React,{useState} from "react";

export default function SuperHeroCard({hero}){
const [like,setLike]=useState(true)
function handleClick(){
  setLike(prev =>!prev)
}

  return(
<li className="card">
{like ? (
  <button className="like" onClick={handleClick}>💚 </button>
) : <button onClick={handleClick}>😿 </button>}
  <img src={hero.url} alt={hero.name}></img>
  <h4>{hero.name}</h4>
  <p>First Appearance: {hero.firstappearance}</p>
  <p>Publisher: {hero.publisher}</p>
</li>
  )

}