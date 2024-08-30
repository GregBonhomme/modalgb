import React, { useRef,useState,useEffect } from "react"
import closeBtn from "./assets/closeBtn.png"

function Modal ({isOpen,setModalOpened ,children}) {

    const modalRef = useRef(HTMLDialogElement)
    const [modalDisplay, setModalDisplay] = useState( "none" )

    
    useEffect(()=> {
        const modalElement = modalRef.current
        if (modalElement) {
            if (isOpen === true) {
                setModalDisplay("flex")
            } else {
                setModalDisplay("none")
            }
        }
    },[isOpen])

    const handleEscapeKey = (event) => {
        if (event.key === "Escape") {
            handleCloseModal()
        }
    }

    const handleCloseModal = () => {
        setModalOpened(false)
    }

    return (
        <div ref={modalRef} onKeyDown={handleEscapeKey} className="modal" style={{display:modalDisplay}}>
            <div className="modal_closeBtn" onClick={handleCloseModal}>
                <img src={closeBtn} alt="Bouton de fermeture" />
            </div>
            {children}
        </div>
    )
}

export default Modal