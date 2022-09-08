import React, { useState, useEffect } from "react";
import NewSuperHeroForm from "./NewSuperHeroForm";
import { Link } from "react-router-dom";
import SuperHeroList from "./SuperHeroList";

export default function SuperHeroPage() {
  const [superHeroData, setSuperHeroData] = useState([]);
  // Test stuff********************
  function handleDelete(id) {
    const deleteHeros = superHeroData.filter((h) => h.id !== id);
    setSuperHeroData(deleteHeros);
    console.log(deleteHeros)
  }

  // ******************************
  function addSuperHero(newSuperHero) {
    const superPost = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSuperHero),
    };
    fetch(`http://localhost:3000/heros`, superPost)
      .then((res) => res.json())
      .then((newSuperHero) =>
        setSuperHeroData([...superHeroData, newSuperHero])
      );
  }

  useEffect(() => {
    fetch(`http://localhost:3000/heros`)
      .then((res) => res.json())
      .then((data) => {
        setSuperHeroData(data);
      });
  }, []);

  return (
    <div>
      <NewSuperHeroForm addSuperHero={addSuperHero} />
      <Link to='/'>
        <button>Click here to go Home</button>
      </Link>
      <SuperHeroList
        superHeroData={superHeroData}
        handleDelete={handleDelete}
      />
      <Link to='/About'>
        <button>Check out our about page</button>
      </Link>
    </div>
  );
}
