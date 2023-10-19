import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";


function TodoForm (){
    const {
        addTodo,
    } = React.useContext(TodoContext);

    const [valueTodo, setValueTodo] = React.useState('');

    const onChange = (e) =>{
        setValueTodo(e.targe.value);
    };

   
    return (
        <div className="form-container">
            <form className="Form-Modal">
                <label className="Form-Modal--label">Escribe tu nuevo TODO</label>
                <textarea className="Form-Modal--textarea"
                    placeholder="Juntar las esferas del dragon"
                    value={valueTodo}
                    onChange={onChange}
                />
                <div className="Form-Modal--buttons">
                    <button 
                        className="TodoForm-button acept" 
                        onClick={() => {
                            addTodo(valueTodo);
                        }}>
                            Aceptar
                    </button>
                    <button 
                        className="TodoForm-button cancel">
                            Cancelar
                    </button>
                </div> 
            </form>
        </div>
        
    );
};

export { TodoForm };