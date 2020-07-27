import React, {useState} from 'react'

import PageItem from './PageItem.js'
import MovieCard from './MovieCard.js'
import ModalWindow from './ModalWindow.js'

function ListMovieResults({ data, handlePage, page}) {
        
    
    // const [showModal, setShowModal] = useState(false);
    // const [title, setTitle] = useState('');
    const [modal, setModal] = useState({show: false, title: ''})
    
    const handleClick = (e) =>  {
        e.preventDefault();
        if(!modal.show){

            const auxTitle = e.target.parentNode.parentNode.firstChild.nextSibling.nextSibling.innerHTML;
            setModal({show: true, title: auxTitle})
        }else{

            setModal({show: false, title: ''})
        }

        
    }

    const {totalResults, Search} = data;

    const handlePrevious = () =>  handlePage((page - 1));
    const handleNext = () =>  handlePage((page + 1));
    const handleSetPageNumber = (e) => handlePage(parseInt(e.target.innerHTML));
    
    const getStart = () => (page>=10 ? Math.floor(page/10)*10 : 1);
    const getTotalPages = (start) => (Math.ceil((parseInt(totalResults) - (10*(start===1? 0: start)))/10));

    const setPageNumbers = (listaPages, classPage) => {

        const start =  getStart(); //returns a number //example 1=<page<=9 returns 1// 10<=page<=19 returns 10
        const totalPages = getTotalPages(start); //return how many pages we'll show 
        const stopFor = totalPages>10 ? 10 : totalPages;   
        
        for(let i=start; i<=(stopFor + (start===1? 0 : start)); i++){

            if(i===page) classPage+=' page-select';
            
            listaPages.push( 
                <PageItem 
                page={i} 
                key={i} 
                classPage={classPage} 
                onClick = {handleSetPageNumber}
                /> 
            );

            classPage = 'search-results__listPages__pageItem';
        }
    }   

    const showPages = () => {
        
        if(isNaN(totalResults)) return null;
        else {
            
            const listaPages = [];
      
            let classPage = 'search-results__listPages__pageItem';   

            if(page>1) 
                listaPages.push( 
                    <PageItem 
                    page={"Previous"} 
                    classPage={classPage} 
                    key="pre" 
                    onClick={handlePrevious}
                    />
                );

            setPageNumbers(listaPages, classPage);

            if(page!==Math.ceil(parseInt(totalResults)/10))
                listaPages.push( 
                    <PageItem 
                    page={"Next"} 
                    classPage={classPage} 
                    key="next" 
                    onClick={handleNext}
                    /> 
                );

            return listaPages;
        }
    }

    return (
        <>
            <ModalWindow modal={modal} handleClick = {handleClick}  />
            <div className="search-results" >
                <div className="search-results__container">
                    <p className="search-results__results"><b>{totalResults ? totalResults : 'There are not'} OMDb</b> Movies found</p>
                    {/*pestañas (Previous) (1) (2) ... (10) (Next) */}
                    <ul className="search-results__listPages">
                        {page && showPages(page)}
                    </ul>
                </div>
                {/*lISTA DE PELICULAS */}
                <div className="searsearch-results__container--flex">
                    <div className="search-results__container--movies">
                    {Search && Search.map( (movie, index) => {
                        
                        return <MovieCard
                            poster={movie.Poster}
                            title={movie.Title}
                            year={movie.Year}
                            key={index}
                            handleClick = {handleClick}
                        />

                    })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListMovieResults
