import React,{useState, useEffect} from "react";
import NewSuperHeroForm from "./NewSuperHeroForm";
import Search from "./Search";
import SuperHeroList from "./SuperHeroList";

export default function SuperHeroPage() {

  
  const [superHeroData, setSuperHeroData] = useState([])
  const [filteredHeros,setFilteredHeros] =useState(superHeroData)
  
  function addSuperHero(newSuperHero){
    setSuperHeroData([...superHeroData,newSuperHero])
  
  }  
function handleSearch(e){
const searchHeros = superHeroData.filter(hero => {
  return hero.name.toUpperCase().includes(e.target.value.toUpperCase())
})
setFilteredHeros(searchHeros)
}

useEffect(() =>{
fetch(`http://localhost:3000/heros`)
.then(res => res.json())
.then(data => {setSuperHeroData(data) 
setFilteredHeros(data)})
},[])

console.log(superHeroData)
return (
  <div>
  <NewSuperHeroForm addSuperHero={addSuperHero}/>
  <Search handleSearch={handleSearch}/ >
  <button>Sort By Name</button>
  <SuperHeroList filteredHeros={filteredHeros}/>
  </div>
)}