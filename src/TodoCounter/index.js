import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

//Quite las props ya que useContext me permite trabajar
//directamente con los estados derivados
function TodoCounter(){

    //useContext(TodoContext) es una alternativa a Context.Provider, mas elegante y comoda
    //Estoy usando directamente estados derivados sin usar props. Un elisir
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