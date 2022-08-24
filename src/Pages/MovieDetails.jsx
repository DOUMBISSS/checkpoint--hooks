import React from 'react'
// import MovieCard from './MovieCard';

function MovieList({movies,searchFilter}) {
  return (
     <div>
              <div className='movie--cards'>
                  <div className='movie--cards--content'>
                  <div className='movie--cards--images'>
                        <div className='movie--cards--images--box'>
                          <img src="colombiana.jpg" alt="" />
                        </div>
                  </div>
                <div className='movie--cards--description'>
                    <div className='movie--cards--description--content'>
                      <div className='movie--cards--description--content--header'>
                      <h2 className='title--movie'>Colombiana</h2>
                      </div>

                      <div className='movie--descriprion'>
                        <p>1992. Colombie. Cataleya, 9 ans, assiste au meurtre de ses parents. Échappant de justesse au massacre, elle se réfugie aux États-Unis, chez son oncle Emilio, un gangster. 15 ans plus tard, elle travaille pour lui comme tueuse à gages. Elle signe ses meurtres d'une orchidée dessinée sur le torse de ses victimes : un message à l'intention des assassins de ses parents. Car Cataleya est bien décidée à aller jusqu'au bout de sa vengeance… quitte à perdre tous ceux qu'elle aime.</p>
                        <h3>Duration: 1h30min</h3>
                        <h3>Date d'ajout: 22/08/2022</h3>
                        <h3>Genres : <span>Sexe, Drogue, Dramatique</span></h3>
                        <div className='limited--age'>
                          <p>18+</p>
                        </div>
                      </div>

                      <div className='movie--cards--description--content--footer'>
                          <button className='btn'>Bande annonce</button>
                          <button className='btn'>Play</button>
                      </div>
                    </div>
                </div>
            </div>
            <div className='btn--return'>
            <button>Retour a l'accueil</button>
            </div>
      </div>
      </div>
  )
}

export default MovieList