import React from "react";
import { useLocalStorage } from "../useLocalStorage";

/*
Context para usar props sin 
molestar a toda la famila.
Creamos un contexto
*/
const TodoContext = React.createContext();


//Creamos nuestro context personalizado
function TodoProvider({ children }){
    //uso de estados, desde componente padre a hijo
    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);

    //uso de custom hook
    const { item: todos,
            saveItem:saveTodos,
            loading,
            error } = useLocalStorage('TODOS_V1', []);


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

        //debo pasar data.text, el sub-objeto, no solo data.
        const indexCompleted = newArray.findIndex((data) => data.text === dato);
        const stateCompleted = newArray[indexCompleted].completed;
        newArray[indexCompleted].completed = !stateCompleted;
        saveTodos(newArray);
    };

    const deletedTodo = (dato) => {
        const newArray = [...todos];
        const todoIndex = newArray.findIndex((data) => data.text === dato);
        newArray.splice(todoIndex, 1);
        saveTodos(newArray);
    };

    const addTodo = (valueTodo) => {
        const newArray = [...todos];
        newArray.push = {
            text: valueTodo,
            completed: false,
        };
        saveTodos(newArray);
    };

    return(
        <TodoContext.Provider value={{
            todos,
            saveTodos,
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedValues,
            deletedTodo,
            actualizarCompletado,
            openModal,
            setOpenModal,
            addTodo,
        }}> 
            {children}
        </TodoContext.Provider>
    );
}



//Luego del createContext, obtenemos estos 2 componentes
/* <TodoContext.Provider></TodoContext.Provider>
<TodoContext.Consumer></TodoContext.Consumer> */


export { TodoContext, TodoProvider };