import React from 'react'
import '../styles/Week.scss'
import hulu from '../assets/hulu.png'
import amazon from '../assets/amazon.png'
import netflix from '../assets/netflix.png'
import more from '../assets/more.png'


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
              <div className='streaming-hold'>
                <h3>Streaming options: </h3>
                <>{n ? <a href="https://www.netflix.com"><img className='streaming-logo' src={netflix} alt='netflix' /></a> : <></>}</>
                <>{h ? <a href="https://www.hulu.com"><img className='streaming-logo' src={hulu} alt='hulu' /></a> : <></>}</>
                <>{a ? <a target='blank' href="https://www.amazon.com/Prime-Video/b?ie=UTF8&node=2676882011"><img className='streaming-logo' src={amazon} alt='amazon prime' /></a> : <></>}</>
                {/* <FontAwesomeIcon icon={faExternalLinkAlt} className='share-icon' /> */}
                <a target='blank' href={element.justWatch}>
                  <img className='streaming-logo' src={more} />
                </a>
              </div>
            </div>
            <img className='poster' src={element.poster} alt={element.title} />
            <p className='mobile-synopsis'>{element.synopsis}</p>
            <div className="streaming-hold-mobile">
              <h3>Streaming options: </h3>
              <>{n ? <a href="https://www.netflix.com"><img className='streaming-logo' src={netflix} alt='netflix' /></a> : <></>}</>
              <>{h ? <a href="https://www.hulu.com"><img className='streaming-logo' src={hulu} alt='hulu' /></a> : <></>}</>
              <>{a ? <a target='blank' href="https://www.amazon.com/Prime-Video/b?ie=UTF8&node=2676882011"><img className='streaming-logo' src={amazon} alt='amazon prime' /></a> : <></>}</>
              {/* <FontAwesomeIcon icon={faExternalLinkAlt} className='share-icon' /> */}
              <a target='blank' href={element.justWatch}>
                <img className='streaming-logo' src={more} />
              </a>
            </div>
          </div>)
      })}
    </div>
  )
}
export default Week
