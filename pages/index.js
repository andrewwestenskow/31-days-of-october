import React from 'react'
import '../styles/Home.scss'
import bigger_movies from '../assets/bigger_movies.png'
import powered from '../assets/powered.png'


const Home = () => (
  <div className='Home'>
    <img className='corner-logo' src={bigger_movies} alt="we watch movies logo"/>
    <img className='corner-attribution' src={powered} alt="Powered by the moviedb"/>
    Andrew
  </div>
)

export default Home
