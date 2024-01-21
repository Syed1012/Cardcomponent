import React from 'react'
import profPic from './assets/img.png'

const Card = () => {
  return (
    <div className='card'>
        <img className="CardImg" src={profPic}alt="card image" />
        <h2 className='CardTitle'>Syed</h2>
        <p>Hi i am a MERN stack software developer.</p>
    </div>
  )
}

export default Card