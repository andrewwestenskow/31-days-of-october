import React from 'react'
import '../styles/Week.scss'


const Week = (props) => {
  let id
  if(props.data.week === 2){
    id = 'hill-house'
  }
  return (
    <div className='Week'>
      <h1>{props.data.details.theme}</h1>
      {props.data.films.map(element => {
        return (
          <div id={id} className='film'>
            <div class="film-content">
              <h2>{element.title}</h2>
              <h4>By: {element.director}</h4>
              <p>Runtime: {element.runtime} minutes</p>
              <p>Released: {element.released}</p>
              <p>{element.synopsis}</p>
            </div>
            <img className='poster' src={element.poster} alt={element.title} />
          </div>)
      })}
    </div>
  )
}
export default Week
