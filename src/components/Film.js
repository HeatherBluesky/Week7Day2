import React from 'react';


const Film = ({film}) => {
    return (
        <>
         <a href = {film.url}><h4>{film.name}</h4></a>
        
        </>
    );
}

export default Film;