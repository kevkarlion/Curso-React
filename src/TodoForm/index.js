import React from "react";
import './TodoForm.css';

function TodoForm (){
    return (
        <form className="Form-Modal">
            <label className="Form-Modal--label">Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Juntar las esferas del dragon"
            />

            <div className="Form-Modal--buttons">
                <button 
                className="TodoForm-button acept"
                >
                    Aceptar
                </button>
                <button 
                className="TodoForm-button cancel">
                    Cancelar
                </button>
            </div>
            
        </form>
    );
};

export { TodoForm };