
import React from 'react'

const  BackgroundImage =() => {
  return (
    <div
    style={{
      backgroundImage: `url(${"./backroundImage.webp"})`,
      height:"621px",
      width:"100%",
      backgroundSize:"cover",
      backgroundPosition:"center"
    
    }}
    
    ></div>
  )
}

export default BackgroundImage