import React, {useState, useRef} from 'react'

function Login( {handleLogged, handleLogin, setUser}) {

    
    /* manejar el ingreso de login al local storage handleSubmit */

    const nameRef = useRef();
    const passwordRef = useRef();

    const userExist = (objUser ) => {
       
        for(let key in localStorage){
            if(isNaN(parseInt(key)) ) continue;

            const aux_user = JSON.parse(localStorage[key]);
            console.log(key, aux_user)

            if(aux_user.name === objUser.name && aux_user.password === objUser.password ){
                sessionStorage.setItem(key, localStorage[key]);
                setUser(aux_user);
                console.log("found")
                return true;
            }
        }
        return false;

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(nameRef.current.value && passwordRef.current.value){

            const objUser = {
                name: (nameRef.current.value).toUpperCase(),
                password: (passwordRef.current.value).toUpperCase(),
                favorites: [],
                moviesRated: []
            }

            if(!userExist(objUser)){
                const stringUser = JSON.stringify(objUser);
            
                sessionStorage.setItem( `${localStorage.length}`, stringUser);
                localStorage.setItem(`${localStorage.length}`, stringUser);
                setUser(objUser);
            }
            
            handleLogged();
            handleLogin();

        }

    }

    return (
        <div className = 'login--container'>
            <div className = "login__buttonClose--container">
                <button 
                className="login__buttonClose button--close"
                id="button"
                onClick = {handleLogin}
                >X</button>
            </div>
            <form className="login">
                <h1>LOGIN</h1>
                <label htmlFor="username" >UserName:</label>
                <input 
                type="text" 
                id="username" 
                name="username"
                ref={nameRef}
                 />
                <label htmlFor="password" >Password:</label>
                <input 
                type="password" 
                id="password"
                name="password"
                ref={passwordRef}
                 />
                <button className="login__submit button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login
