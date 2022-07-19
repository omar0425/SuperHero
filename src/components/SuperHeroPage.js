import React,{useState, useEffect} from "react";
import NewSuperHeroForm from "./NewSuperHeroForm";
import Search from "./Search";
import SuperHeroList from "./SuperHeroList";

export default function SuperHeroPage() {
  
const [superHeroData, setSuperHeroData] = useState([])

useEffect(() =>{
fetch(`http://localhost:3000/heros`)
.then(res => res.json())
.then(data => setSuperHeroData(data))
},[])

console.log(superHeroData)
return (
  <div>
  <NewSuperHeroForm />
  <Search / >
  <button>Sort By Name</button>
  <SuperHeroList superHeroData={superHeroData}/>
  </div>
)}