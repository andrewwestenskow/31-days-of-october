import React from 'react'
import bigger_movies from '../assets/bigger_movies.png'
import powered from '../assets/powered.png'

const Footer = () => {
  return (
  <div className='Footer'>
    <img className='corner-logo' src={bigger_movies} alt="we watch movies logo"/>
    <img className='corner-attribution' src={powered} alt="Powered by the moviedb"/>
  </div>
  )
}

export default Footer