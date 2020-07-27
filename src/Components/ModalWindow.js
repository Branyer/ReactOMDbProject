import React, {useRef, useEffect, useState} from 'react'

const API_KEY = '715d100a';
const API = 'https://www.omdbapi.com/';

function ModalWindow({modal, handleClick}) {

    const modalRef = useRef();
    const [data, setData] = useState({});
    useEffect(()=>{

        const fetchDetails  = async () => {
            try {
                const url=`${API}?t=${modal.title}&apikey=${API_KEY}`;
                const response = await fetch(url);
                const dataJson = await response.json();
                setData(dataJson);
    
                setTimeout(() => {modalRef.current.style.transform = 'translate(0)';}, 0);

            } catch(e) {
                console.log(e);
            }
        }


        if(modal.show) fetchDetails()
        else {
            setTimeout(() => {modalRef.current.style.transform = 'translate(100%)';}, 0);
            // setData({});
        }

    }, [modal])
    
 
    return (
        <>
            <div className = "modal-window--container" ref={modalRef}>
                <div className = "modal-window">
                    <div className ="modal-window__buttonOut--container">
                        <button 
                        className="modal-window__buttonOut"
                        onClick = {handleClick}
                        > X </button>
                    </div>
                    <div className = 'modal-window__details--container'>
                        <div className = 'modal-window__details__poster--container'>
                            <p> <b>{data.Title}</b> {data.Year} Directed by <span>{data.Director}</span> </p>
                            <img 
                            src={data.Poster} 
                            alt={data.Title}
                             />
                             <p>{data.Plot}</p>
                             <ul>
                                <span>Ratings:</span>
                                 {data.Ratings && data.Ratings.map((rating, index)=>
                                    <li key={index}><span>{rating.Source}: </span> {rating.Value} </li>
                                 )}
                             </ul>
                        </div>
                        <div className = 'modal-window__details__ratings--container'>

                            <ul>
                            <span>MoreDetails:</span>
                                <li><span>Production:</span> {data.Production}</li>
                                <li><span>Writers:</span> {data.Writer}</li>
                                <li><span>Actors:</span> {data.Actors}</li>
                                <li><span>Awards:</span> {data.Awards}</li>
                                <li><span>Rated:</span> {data.Rated}</li>
                                <li><span>Country:</span> {data.Country}</li>
 
                            </ul>
                        </div>
                    
                    </div>
                </div>
            </div>
        </> 
    )
}

export default ModalWindow
