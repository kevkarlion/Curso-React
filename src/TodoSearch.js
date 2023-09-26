import './styles/TodoSearch.css';
import React from 'react';


//recibo lo valores del estado desde el padre
function TodoSearch({ searchValue, setSearchValue }){
    

    return (
        <div>
            <input className='search' placeholder="Anotá para no olvidar" 
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