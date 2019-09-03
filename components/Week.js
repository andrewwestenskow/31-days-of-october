import React from 'react'
import '../styles/Week.scss'


const Week = (props) => {
  console.log(props.data)
  return (
    <div className='Week'>
      <h1>Week {props.data.week} (Oct. {props.data.details.start} - Oct. {props.data.details.end}): {props.data.details.theme}</h1>
      {props.data.films.map(element => {
        return (
          <div key={element.title} className='film'>
            <div className="film-content">
              <h2>{element.title}</h2>
              <div className="line"></div>
              <h4>Director: {element.director}</h4>
              <p><strong>Runtime:</strong> {element.runtime} minutes</p>
              <p><strong>Released:</strong> {element.released}</p>
              <p className='synopsis'>{element.synopsis}</p>
            </div>
            <img className='poster' src={element.poster} alt={element.title} />
            <p class='mobile-synopsis'>{element.synopsis}</p>
          </div>)
      })}
    </div>
  )
}
export default Week
