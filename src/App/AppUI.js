import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import './AppUI.css';
import React from 'react';


function AppUI() {
    const {
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedValues,
            loading,
            error,
            actualizarCompletado,
            deletedTodo,
    } = React.useContext(TodoContext);

    return (
    //React.Fragment nos permite poder declarar
    //contenido sin necesidad de usar contenedores.
    //No necesito poner despues de todo el React.F, solo los signos de menor y mayor
    <>

        {/* Uso de props */}
        {totalTodos > 0  && 
        <TodoCounter completed={completedTodos}
            total={totalTodos}
        />}

        {!loading && !error && <TodoSearch
            //Envio los valores del estado
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />}

        
             <TodoList>
             {loading &&  <TodosLoading />}
             {error && <TodosError />}
             {(!loading && !error && searchedValues.length === 0)
                 && <EmptyTodos />}

             {/* Creo un nuevo array, y le imprimo propiedades
             a traves de props a un componente que hace de 
             schema. Esto permite que sea reutulizable el 
             componente TodoItem  */}
             {/* Renderizo solo las 
             coincidencias del buscador */}
             {/* IMPORTANTE! esto, renderiza todo los TODOS, 
             cuando aun no hay una busqueda, ya que todos los 
             TODOS tienen el mismo cursor */}
             {searchedValues.map(item => (
                 <TodoItem
                     key={item.text}
                     text={item.text}
                     completed={item.completed}
                     ad={actualizarCompletado}
                     deleteItemTodo={deletedTodo}
                 />
             ))}
         </TodoList>
        {!loading && <CreateTodoButton />} 
    </>
    );
}


export { AppUI };