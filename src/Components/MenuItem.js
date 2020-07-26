import React from 'react'

function MenuItem({value, onClick}) {
    return (
        <li className="header__menu__item" onClick={onClick}> { value }  </li>
    )
}

export default MenuItem
