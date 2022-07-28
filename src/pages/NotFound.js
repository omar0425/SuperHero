import React from 'react'
import image from 'src/images/image.png'

const NotFound = () => {
  return (
    <div>
<h1>404 PAGE NOT FOUND</h1>
<h3>What did you do?</h3>
<p>Check that you typed the address correctly, go back to your previous page or try using our site search to find something specific.</p>
<img src={image} alt="404 Image" />
    </div>
  )
}

export default NotFound