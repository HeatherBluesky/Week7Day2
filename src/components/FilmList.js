import React from 'react';
import Film from './Film';


const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
      return <Film key={film.id} film = {film} url = {film.url} />
    })
    return (
    <div>
      

        {filmNodes}
    
      <a href = {"https://www.imdb.com/calendar/?region=gb"}><button>Up Coming Films </button></a> 
    </div>
 
    );
  
}

export default FilmList;