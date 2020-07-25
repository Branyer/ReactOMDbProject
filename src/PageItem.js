import React from 'react'

function PageItem({ page, classPage, onClick}) {
    return (
        <li className={classPage} onClick={onClick}>
            { page }
        </li>
    )
}

export default PageItem
