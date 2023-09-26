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
    completed: true
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
  },
  {
    text: 'Estados derivados',
    completed: true
  }
];


function App() {

  //uso de estados, desde componente padre a hijo
  const [searchValue, setSearchValue] = React.useState('');
  console.log('Los usuarios buscan todos de, ' + searchValue);



  const [todos, setTodos] = React.useState(defaultTodos);

  //Estado derivado
  //La doble negacion devuelve un valor booleano,
  //es mas sencillo y limpio de ver. Ya que no
  //quiero un array, solo los valores true o false.
  /**
   * Filtra la cantidad de todos completados,
   * y lo veo en el render
   */
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  /**
   * Este codigo lo mejore abajo 
   */
  //Busco coincidencias entre el todo y las busquedas
  // const searchedValues = todos.filter((todo) => {
  //   return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
  // });
  /**
   * aca esta mejorado
   */
  const searchedValues = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });


  /**
   * Funcion que busca un todo clickeado 
   * en el c hijo, y luego lo cambia
   * el estado a completado
   */
  const actualizarCompletado = (dato) => {
    const newArray = [...todos];

    //debo pasar data.text, el subobjeto, no solo data.
    const indexCompleted = newArray.findIndex((data) => data.text === dato);
    const stateCompleted = newArray[indexCompleted].completed;
    newArray[indexCompleted].completed = !stateCompleted; 
    setTodos(newArray);
  } 

  const deletedTodo = (dato) => {
    const newArray = [...todos];
    const todoIndex = newArray.findIndex((data) => data.text === dato);
    newArray.splice(todoIndex, 1);
    setTodos(newArray);
  }


  return (

    //React.Fragment nos permite poder declarar
    //contenido sin necesidad de usar contenedores.
    //No necesito poner despues de todo el React.F, solo los signos de menor y mayor
    <>

      {/* Uso de props */}
      <TodoCounter completed={completedTodos}
        total={totalTodos}
      />
      <TodoSearch
        //Envio los valores del estado
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {/* Creo un nuevo array, y le imprimo propiedades
        a traves de props a un componente que hace de 
        schema. Esto permite que sea reutulizable el 
        componente TodoItem  */}
        {/* Renderizo solo las 
        coincidencias del buscador */}
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

      <CreateTodoButton />

    </>
  );

}




export default App;
