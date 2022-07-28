import React,{useState, useEffect} from "react";
import NewSuperHeroForm from "./NewSuperHeroForm";
import Search from "./Search";
import SuperHeroList from "./SuperHeroList";

export default function SuperHeroPage() {

  
  const [superHeroData, setSuperHeroData] = useState([])
  const [filteredHeros,setFilteredHeros] =useState(superHeroData)
  
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
      .then(data => setSuperHeroData(data))
      setSuperHeroData({...superHeroData,newSuperHero})
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

function handleClick(){
 const sortedHeros = superHeroData.slice().sort((a,b) => {
    if (a.name > b.name) return  1
    if (a.name < b.name) return - 1
    else return 0
  })
setFilteredHeros(sortedHeros)
}
return (
  <div>
  <NewSuperHeroForm addSuperHero={addSuperHero}/>
  <Search handleSearch={handleSearch}/ >
  <button onClick={handleClick}>Sort By Name</button>
  <SuperHeroList filteredHeros={filteredHeros}/>
  </div>
)}