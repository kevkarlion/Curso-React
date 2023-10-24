import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';
import { GrAdd } from "react-icons/gr";;


function CreateTodoButton() {
    const {
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return (
        <button className={openModal ? "CreateTodoButtonZ create-todo-button" : "create-todo-button"} 
            onClick={() => (setOpenModal(!openModal))
        }><GrAdd /></button>
    );
};

export { CreateTodoButton };