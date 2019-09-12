import React from 'react'
import '../styles/Description.scss'
import bigger_movies from '../assets/bigger_movies.png'

const Description = (props) => {
  return (
    <div className='Description'>
      <div className="description-box">
          <img src={bigger_movies} alt="We watch movies" className="description-logo"/>
          <article>

          <h2>What is 31 Days of October?</h2>
            <p>By: Andrew Westenskow</p>
          <div className="line"></div>
          <p className='description-text'>Horror serves an important and often overlooked function in the world of cinema.  </p>
          </article>
      </div>
    </div>
  )
}
export default Description
