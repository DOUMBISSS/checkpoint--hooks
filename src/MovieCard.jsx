import React from 'react'

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
                {/* <h4>Duration :{movie.Duration}</h4> */}
          </div>
    </div>

 </div>
  )
}

export default MovieCard