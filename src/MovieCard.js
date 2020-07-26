import React, {useRef}from 'react'

function MovieCard({poster, title, year}) {

    const buttonRef = useRef();
    const handleMouseEnter = (e) => {
        const hoverIn = e.target;
        hoverIn.style.opacity = '1';
        buttonRef.current.style.opacity='1';
        buttonRef.current.style.transform = 'translateY(0px)' 
      
    }


    const handleMouseLeave = (e) => {
        const hoverOut = e.target;
        buttonRef.current.style.opacity='0';
        buttonRef.current.style.transform = 'translateY(50px)' 
        hoverOut.style.opacity = '0';
    }


    return (
        <div className="search_results__movie" >

            <div className="search_result--hover" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
                <button className="search_result__viewDetails" ref={buttonRef}>View Details</button>
            </div>


            <img className="search_results__movie__poster" 
            src={poster} 
            alt={title}
            
            />
            <b className="search_results__movie__title">{title}</b>
            <br/>
            <span className="search_results__movie__year">{year}</span>
        </div>
    )
}

export default MovieCard
