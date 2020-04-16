import React from 'react'

export default function Header(props){
  return(
    <div>
      <h1 className='title'>{props.title}</h1>
      <h3 className='date'>{props.date}</h3>
    </div>
  )
}
