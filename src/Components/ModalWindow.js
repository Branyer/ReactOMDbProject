import React, {useRef} from 'react'

function ModalWindow({show}) {

    const modalRef = useRef();

    const showWindow = () => {
        if (show) {

        setTimeout(() => {
            modalRef.current.style.opacity = '1';
            modalRef.current.style.transform = 'translate(0)';
            console.log("tiempo", modalRef.current);
        }, 0);

        return <div className = "modal-window--container" ref={modalRef}>
            <div className = "modal-window">

            </div>
        </div>
        }else return false 
}
    

    return (
        <>
        {showWindow()}
        </> 
    )
}

export default ModalWindow
