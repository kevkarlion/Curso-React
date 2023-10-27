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
        <button className={`create-todo-button ${openModal && "CreateTodoButtonZ"}`} 
            onClick={() => (setOpenModal(!openModal))
        }><GrAdd /></button>
    );
};

export { CreateTodoButton };