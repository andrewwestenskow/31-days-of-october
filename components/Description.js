import React from 'react'
import '../styles/Description.scss'
import bigger_movies from '../assets/bigger_movies.png'

const Description = (props) => {
  return (
    <div className='Description'>
      <div className="description-box">
          <img src={bigger_movies} alt="We watch movies" className="description-logo"/>
          <article>

          <h2>31 Days of October celebrates the best that horror has to offer.</h2>
          <div className="line"></div>
          <p className='description-text'>Each year we set aside the month of October to watch as many horror films as we can</p>
          </article>
      </div>
    </div>
  )
}
export default Description
