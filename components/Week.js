import React from 'react'
import '../styles/Week.scss'
import hulu from '../assets/hulu.png'
import amazon from '../assets/amazon.png'
import netflix from '../assets/netflix.png'
import more from '../assets/more.png'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Week = (props) => {
  return (
    <div className='Week'>
      <h1>Week {props.data.week} (Oct. {props.data.details.start} - Oct. {props.data.details.end}): {props.data.details.theme}</h1>
      {props.data.films.map(element => {
        const { netflix: n, hulu: h, amazonPrime: a } = element.availableOn
        return (
          <div key={element.title} className='film'>
            <div className="film-content">
              <h2>{element.title}</h2>
              <div className="line"></div>
              <h4>Director: {element.director}</h4>
              <p><strong>Runtime:</strong> {element.runtime} minutes</p>
              <p><strong>Released:</strong> {element.released}</p>
              <p className='synopsis'>{element.synopsis}</p>
              <a className='streaming-link' target='blank' href={element.justWatch}>
                <div className='streaming-hold'>
                  <h3>Streaming options: </h3>
                  <>{n ? <img className='streaming-logo' src={netflix} alt='netflix' /> : <></>}</>
                  <>{h ? <img className='streaming-logo' src={hulu} alt='hulu' /> : <></>}</>
                  <>{a ? <img className='streaming-logo' src={amazon} alt='amazon prime' /> : <></>}</>
                  {/* <FontAwesomeIcon icon={faExternalLinkAlt} className='share-icon' /> */}
                  <img className='streaming-logo' src={more}/>
                </div>
              </a>
            </div>
            <img className='poster' src={element.poster} alt={element.title} />
            <p className='mobile-synopsis'>{element.synopsis}</p>
            {/* {n || h || a ?
                <div className='streaming-hold-mobile'>
                  <h3>Stream it on:</h3>
                  <>{n ? <img className='streaming-logo' src={netflix} alt='netflix' />: <></>}</>
                  <>{h ? <img className='streaming-logo' src={hulu} alt='hulu' />: <></>}</>
                  <>{a ? <img className='streaming-logo' src={amazon} alt='amazon prime' />: <></>}</>
                </div> : <></>} */}
            <a className='streaming-link-mobile' target='blank' href={element.justWatch}><FontAwesomeIcon icon={faExternalLinkAlt} className='share-icon' /></a>
          </div>)
      })}
    </div>
  )
}
export default Week
