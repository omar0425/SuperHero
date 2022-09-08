import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>
      This project was created because of my fascination with superheroes. The comic book superhero has a deep history in American culture. What was once a niche hobby to a few has grown to be  a major impact to pop culture around the world. The fascination with superheroes has brought great fortune to Marvel and DC comics. On this page you will see the aspects of many superheroes and I hope you will find it enjoyable as I enjoyed creating it.
      </h1>
      <Link to="/">
      <button>Click here to go Home</button>
      </Link>
    </div>
  )
}
export default About