import React, { useState } from 'react'
import MenuItem from './MenuItem.js'
function Menu() {

    const [isLogged, setIsLogged] = useState(false);

    const handleLogin = () =>  isLogged ? setIsLogged(false) : setIsLogged(true);

    const LoggedOrNot = () => 
        (isLogged ?
            <>
                <MenuItem value="Favorites" />
                <MenuItem value="Logged"  onClick={handleLogin}/>
            </>
            :
            <>
                <MenuItem value="Login"  onClick={handleLogin}/>
            </>
        )

    return (
        <div className="header__menu">
            <ul>
                <MenuItem value="Home" />
                {LoggedOrNot()}
            </ul>
        </div>
    )
}

export default Menu
