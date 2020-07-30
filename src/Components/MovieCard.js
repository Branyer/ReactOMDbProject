import React, {useRef} from 'react'

// import starBase from '../../public/images/star-base.png'
// import starFav from '../../public/images/star-fav.png'




function MovieCard({movie , handleClick, user, setUser}) {

   const {Title, Year, Poster} = movie;

    const buttonRef = useRef();
    const buttonAddRef = useRef();
    const handleMouseEnter = () => {
        const hoverIn = buttonRef.current.parentNode;
        hoverIn.style.opacity = '1';
        buttonRef.current.style.opacity='1';
        buttonRef.current.style.transform = 'translateY(0px)' 
        
        user.name && buttonAddOrRemoveFavorite();
    }


    const handleMouseLeave = () => {
        const hoverOut = buttonRef.current.parentNode;
        hoverOut.style.opacity = '0';
        buttonRef.current.style.opacity='0';
        buttonRef.current.style.transform = 'translateY(50px)' 
    }

    const isInFavorites = () => {
        const auxNames = user.favorites.map((element) =>element.Title )
        return auxNames.indexOf(movie.Title);
    }

    const handleAdd = (e) =>{ 
      
        buttonAddRef.current.setAttribute('class', 'button-remove');
        buttonAddRef.current.firstChild.setAttribute('src', '../images/star-fav.png')
       
        const auxUser =  {
            ...user,
            favorites: user.favorites.push(movie) ,
            ...user
            }
        

        for(let key in sessionStorage){
            if(isNaN(parseInt(key))) continue;
            sessionStorage.setItem(key, JSON.stringify(auxUser));
            localStorage.setItem(key, JSON.stringify(auxUser));
        }    
        setUser(auxUser);
    }
    
   

    const handleRemove = (e) => {
       
        
        buttonAddRef.current.setAttribute('class', 'button-add');
        buttonAddRef.current.firstChild.setAttribute('src', '../images/star-base.png')
        
    
        user.favorites =  user.favorites.filter((element) => element.imdbID !== movie.imdbID)

        for(let key in sessionStorage){
            if(isNaN(parseInt(key))) continue;
            sessionStorage.setItem(key, JSON.stringify(user));
            localStorage.setItem(key, JSON.stringify(user));
        }    
        setUser(user);
    }

    const handleAddOrRemove = (e) => {
        e.preventDefault()
        if(buttonAddRef.current.className === 'button-add'){
            handleAdd(e);
        }else{
            handleRemove(e);
        }
    }
    

    const buttonAddOrRemoveFavorite = () => {
        if(isInFavorites()!== -1){

            buttonAddRef.current.setAttribute('class', 'button-remove');
            buttonAddRef.current.firstChild.setAttribute('src', '../images/star-fav.png')
            
        }else{
            buttonAddRef.current.setAttribute('class', 'button-add');
            buttonAddRef.current.firstChild.setAttribute('src', '../images/star-base.png')
        }
        

    }
    
    return (
        <>
            
            <div className="search_results__movie" >

                <div 
                className="search_result--hover"
                onMouseLeave={handleMouseLeave} 
                onMouseEnter={handleMouseEnter}>
                    <div className='star-favorites'>
                        
                        {
                        user.name && 
                        <button 
                        ref={buttonAddRef} 
                        onClick={handleAddOrRemove}
                        >
                            <img alt='star'/>
                        </button>
                        }
                    
                    </div>
                    <button 
                    className="search_result__viewDetails button" 
                    ref={buttonRef}
                    onClick = {handleClick}
                    >View Details</button>
                </div>


                <img className="search_results__movie__poster" 
                src={Poster} 
                alt={Title}
                
                />
                <b className="search_results__movie__title">{Title}</b>
                <br/>
                <span className="search_results__movie__year">{Year}</span>
            </div>
        </>
    )
}

export default MovieCard
