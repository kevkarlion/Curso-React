import './TodoSearch.css';
import React from 'react';
import { TodoContext } from '../TodoContext'

//Envio los valores, desde este hijo hacia el padre que es App
function TodoSearch(){
      //useContext es una alternativa a Context.Provider, mas elegante y comoda
    const {
        setSearchValue,
        searchValue,
    } = React.useContext(TodoContext);
    
    return (
      <div className='input-container'>
          <input className='search' placeholder="Buscar TODO" 
          value={searchValue}

          /**Un evento onChange, 
           * permite que haya un cambio searchValue
           * a traves de su modificador.
           * Estas props son enviadas desde el padre.
           */
          onChange={(event) => {
              setSearchValue(event.target.value);
          }}/>
      </div>
    )
};

export { TodoSearch };