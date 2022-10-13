import React from 'react'
import PeliculaTarjeta from './PeliculaTarjeta/PeliculaTarjeta'
import './Peliculas.css'

const Peliculas=()=>{
  return (
    <div className="contenedor-peliculas">
      <PeliculaTarjeta
        url="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/miZFgV81xG324rpUknQX8dtXuBl.jpg"
        name="Spider Man"
      />

      <PeliculaTarjeta
        url="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/z9ajF6E39Hg2pXUofmUYgZHvdX.jpg"
        name="Thor"
      />

      <PeliculaTarjeta
        url="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/lTaRCichc1Ogg63ZMbf6bVxVypk.jpg"
        name="Rey Mono"
      />
    </div>
  )
}

export default Peliculas
