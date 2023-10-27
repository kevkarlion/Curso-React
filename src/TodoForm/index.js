import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";


function TodoForm (){
    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);

    const [valueTodo, setValueTodo] = React.useState('');

    const onChange = (e) =>{
        setValueTodo(e.target.value);
    };

    const onSubmit = (event) => {
        //Para que no se dispare el formulario
        event.preventDefault();
        addTodo(valueTodo);
        setOpenModal(false);
    }

   
    return (
        <div className="form-container">
            <form className="Form-Modal"
                onSubmit={onSubmit} >
                    <label className="Form-Modal--label">Escribe tu nuevo TODO</label>
                    <textarea className="Form-Modal--textarea"
                        placeholder="Juntar las esferas del dragon"
                        value={valueTodo}
                        onChange={onChange}
                    />
                    <div className="Form-Modal--buttons">
                        <button 
                            type="submit"
                            className="TodoForm-button acept" 
                            >
                                Add
                        </button>
                        <button 
                            type="button"
                            className="TodoForm-button cancel"
                            onClick={() => {
                                setOpenModal(false);
                            }}>
                                Cancel
                        </button>
                    </div> 
            </form>
        </div>
        
    );
};

export { TodoForm };