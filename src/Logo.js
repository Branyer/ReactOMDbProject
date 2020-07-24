import React from 'react'

function Logo({ src }) {
    return (
        <div className="header__logo">
            <img src={ src } alt="OMDB-API logo"/>
        </div>
    )
}

export default Logo
