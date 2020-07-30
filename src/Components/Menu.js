import React, { useState } from 'react'
import MenuItem from './MenuItem.js'
function Menu({isLogged, handleLogin, handleLogged, setInFavorites}) {

    const handleHome = () => setInFavorites(false);
    const handleFavorite = () => setInFavorites(true);

    const LoggedOrNot = () => 
        (isLogged ?
            <>
                <MenuItem value="Favorites" onClick = {handleFavorite}/>
                <MenuItem value="Logout"  onClick={handleLogged}/>
            </>
            :
            <>
                <MenuItem value="Login"  onClick={handleLogin}/>
            </>
        )

    return (
        <div className="header__menu">
            <ul>
                <MenuItem value="Home" onClick = {handleHome}/>
                {LoggedOrNot()}
            </ul>
        </div>
    )
}

export default Menu
