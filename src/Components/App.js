import React, { useState, useEffect} from 'react'

import Header from './Header.js'
import FormInputMovie from './FormInputMovie'
import ListMovieResults from './ListMovieResults'

import '../styles/App.css'
import '../styles/Header.css'
import '../styles/FormInputMovie.css'
import '../styles/ListMovieResults.css'
import '../styles/Login.css'

const API_KEY = '715d100a';
const API = 'https://www.omdbapi.com/';

const App = () => {

    const [data, setData] = useState({});
    const [values, setValues] = useState({title: '', page: 1});
    const [user, setUser] = useState({});

    const [inFavorites, setInFavorites] = useState(false); //false home true favorites

    const handleTitleSearch = (v) =>  {
        setValues({title: v, page: 1});
       
    };
    const handlePage = (p) => setValues({...values, page: p });
   
    
    useEffect (() => {
        console.log("App use effect");
        if(!(sessionStorage.length === 0)){
            for(let key in sessionStorage){
                if(!isNaN(parseInt(key))){
                         setUser(JSON.parse(sessionStorage[key]))
                         break;
                }
            }
        }
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            
            try {
                const url=`${API}?s=${values.title}&apikey=${API_KEY}&type=movie&page=${values.page}`;
                const response = await fetch(url);
                const dataJson = await response.json();
                setData(dataJson);
    
            } catch(e) {
                console.log(e);
            }
        }
        fetchData();
    }, [values]);

    return (
        <>
         <Header setUser = {setUser} setInFavorites={setInFavorites}/>
         {!inFavorites && <FormInputMovie  
         handleTitleSearch = {handleTitleSearch} 
         user = {user}
         setInFavorites={setInFavorites}
         />}
         <ListMovieResults  
         data={ data } 
         handlePage={handlePage} 
         page={values.page}
         user = {user}
         setUser = {setUser}
         inFavorites = {inFavorites}
         />

        {/*Footer*/}

        </>
    )
}

export default App
