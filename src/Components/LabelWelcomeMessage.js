import React from 'react'

function LabelWelcomeMessage({ name }) {
    return (
            <label className="form__label" htmlFor="inputMovieTitle">
                Hi { name }! Search a Movie by the Title: 
            </label>
    )
}

export default LabelWelcomeMessage
