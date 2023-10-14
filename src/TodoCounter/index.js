import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter(){

    //useContext es una alternativa a Context.Provider, mas elegante y comoda
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext);

    return (
        <div className='container-title'>
            <h1 className='container-title--text'>
                Completaste {completedTodos} de {totalTodos} TODOS
            </h1>
        </div>
                   
    )
};

export { TodoCounter };