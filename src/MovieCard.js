import React from 'react'

function MovieCard({poster, title, year}) {
    return (
        <div className="search_results__movie">
            <img className="search_results__movie__poster" src={poster}/>
            <b className="search_results__movie__title">{title}</b>
            <br/>
            <span className="search_results__movie__year">{year}</span>
        </div>
    )
}

export default MovieCard
