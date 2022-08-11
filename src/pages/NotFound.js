import React from 'react'
import image from '../images/image.png'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="notfound">
<h1>404 PAGE NOT FOUND</h1>
<h3>What did you do?</h3>
<p>Check that you typed the address correctly, go back to your previous page or click the image below to go home</p>
<Link to="/">
<img src={image} alt="404" />
</Link>
    </div>
  )
}

export default NotFound