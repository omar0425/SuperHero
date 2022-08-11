import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to="/SuperHeroPage">
      <h1>
        Click here to get started
      </h1>
      </Link>
    </div>
  )
}

export default Home