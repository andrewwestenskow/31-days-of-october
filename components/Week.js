import React from 'react'


const Week = (props) => {
  console.log(props.data)
  return (
    <div className='Week'>
      {props.data.films.map(element => {
        return <p>{element.title}</p>
      })}
    </div>
  )
}
export default Week
