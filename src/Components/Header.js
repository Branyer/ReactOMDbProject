import React, {useState, useEffect} from 'react'

import Menu from './Menu.js'
import Logo from './Logo.js'
import Login from './Login.js'
function Header({setUser, setInFavorites}) {

    const [isLogged, setIsLogged] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleLogin = () =>  setShowLogin(!showLogin);
    const handleLogged = () => {
        if(isLogged) {
            sessionStorage.clear()
            setUser({});
        };
        setIsLogged(!isLogged)
    }

    useEffect(() => {
        for(let key in sessionStorage){
            if(isNaN(parseInt(key))) continue
            setIsLogged(true)
        }
        
    }, [])

    return (
        <header className="header">
           { showLogin && 
           <Login 
           handleLogged = {handleLogged} 
           handleLogin = {handleLogin} 
           setUser = {setUser}
           /> }
            <Logo src="./images/OMDB-API.png"/>
            <Menu 
            isLogged = {isLogged} 
            handleLogin = {handleLogin}
            showLogin = {showLogin}
            handleLogged = {handleLogged}
            setInFavorites={ setInFavorites}
            />
        </header>
    )
}

export default Header
