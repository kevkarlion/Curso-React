import React from "react";
import './Modal.css';
import { TodoContext } from "../TodoContext";

import { createPortal } from "react-dom";

function Modal( { children }){
    //Primero, el contenido que queremos teletransportar
    const {
        openModal,
    } = React.useContext(TodoContext);
    
    return createPortal(
        <div className={openModal && 'ModalZ'}>
            {children}
        </div>,
        document.getElementById('modal')   
    );
}

export { Modal };