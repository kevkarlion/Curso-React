import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
    const {
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return (
        <button className={openModal ? "CreateTodoButtonZ" : "CreateTodoButton"} 
            onClick={() => (setOpenModal(!openModal))
        }>+</button>
    );
};

export { CreateTodoButton };