import React, { useRef }from 'react'

import LabelWelcomeMessage from './LabelWelcomeMessage.js'

function FormInputMovie({ handleTitleSearch }) {

    const inputText = useRef();

    const handleButtonClick = (e) => {
        e.preventDefault();
        handleTitleSearch(inputText.current.value);
        inputText.current.value = '';
        inputText.current.focus();
    }
    
    return (
        <form className="form">
            <div className="form__container--input">
                <LabelWelcomeMessage name="BAVC" />
                <input type="text" id="inputMovieTitle" name="inputMovieTitle" ref={inputText} />
            </div>
            <button className="form_button" id="search-button" onClick={handleButtonClick} >Search</button>
        </form>
    )
}

export default FormInputMovie
