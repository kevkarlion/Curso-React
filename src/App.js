/* eslint-disable no-unused-vars */
import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';


const defaultTodos = [
  {
    text: 'Cortar cebolla',
    completed: false
  },
  {
    text: 'Juntar las esferas del dragon',
    completed: false
  },
  {
    text: 'Ir a entrenar',
    completed: false
  },
  {
    text: 'Saltar la cuerda',
    completed: false
  }
];


function App() {
  return (

    //React.Fragment nos permite poder declarar
    //contenido sin necesidad de usar contenedores.
    //No necesito poner despues de todo el React.F, solo los signos de menor y mayor
    <>
      
      {/* Uso de props */}
      <TodoCounter completed={5} de total={10} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(item => (
          <TodoItem key={item.text} text={item.text}  />
        ))}
      </TodoList>

      <CreateTodoButton />

    </>
  );
  
}




export default App;
