import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import './AppUI.css';
import React from 'react';


function AppUI() {
    const {
        totalTodos,
        searchedValues,
        loading,
        error,
        actualizarCompletado,
        deletedTodo,
        openModal,
        // eslint-disable-next-line no-unused-vars
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        //React.Fragment nos permite poder declarar
        //contenido sin necesidad de usar contenedores.
        //No necesito poner despues de todo el React.F, solo los signos de menor y mayor
        <>

            {totalTodos > 0 && <TodoCounter />}

            {!loading && !error && <TodoSearch />}


            <TodoList>
                {loading && <TodosLoading />}
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

            {/* Si modal open, se abre el modal */}
            {openModal && (
                //Portal donde va la logica 
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            
        </>
    );
}


export { AppUI };