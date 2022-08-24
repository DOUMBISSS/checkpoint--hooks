import React from 'react'
// import { FaDropbox } from 'react-icons/fa';

function MovieCard({movie}) {
  return (
    <div>
    <div className="cards">
          <div className="cards--images">
          <div className="cards--images--box">
             <img src={movie.img} alt="" />
          </div>
          </div>
          <div className="cards--content">
                <h3>{movie.nameMovie}</h3>
                {/* <h4><FaBluetooth /></h4> */}
                <h4>Duration :{movie.Duration}</h4>
                <h3>{movie.posterUrl}</h3>
                <div className='btn--movie'>
                  <button className='btn--movie--one'>Play</button>
                  <button className='btn--movie--two'>Plus d'infos </button>
                </div>
          </div>
    </div>

 </div>
  )
}

export default MovieCard