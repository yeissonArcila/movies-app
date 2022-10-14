import React from 'react'
import './PeliculaTarjeta.css'

const PeliculaTarjeta = ({url,name}) => {
  return (
    <div>
      <div>
        <img src={url} alt=""/>
        <h2>{name}</h2>
      </div>
    </div>
  )
}

export default PeliculaTarjeta
