import React from 'react';

//Custom Hook
function useLocalStorage(itemName, initialValue) {

  //Abstraccion del estado del array de TODOS
  const [item, setItem] = React.useState(initialValue);

  const [loading, setLoading] = React.useState(true);

  const [error, setError] = React.useState(false);

  React.useEffect( () => {
    setTimeout(()=> {
      try {
        //Guardo el  contenido de localStorage que esta en string, en una variable
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          //En caso que sea la primera vez que un user entra a la app
          //parametros (key, value)
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          //si tiene datos, lo parseo a un array
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        };
        setLoading(false);
      } catch (error) {
          setLoading(false);
          setError(true);
      }
    }, 2000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
    


  //Funcion actualizadora de datos del localStorage 
  //y del estado de todos
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, 
          saveItem, 
          loading, 
          error };

}

export { useLocalStorage };



// const defaultTodos = [
//   {
//     text: 'Cortar cebolla',
//     completed: true
//   },
//   {
//     text: 'Juntar las esferas del dragon',
//     completed: false
//   },
//   {
//     text: 'Ir a entrenar',
//     completed: false
//   },
//   {
//     text: 'Saltar la cuerda',
//     completed: false
//   },
//   {
//     text: 'Estados derivados',
//     completed: true
//   }
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));