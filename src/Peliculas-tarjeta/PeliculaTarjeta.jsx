import React from 'react'
import './PeliculaTarjeta.css'
const PeliculaTarjeta = (props) => {
  return (
    <div>
      <div>
        <img src={props.url} alt=""/>
        <h2>{props.name}</h2>
      </div>
    </div>
  )
}

export default PeliculaTarjeta
