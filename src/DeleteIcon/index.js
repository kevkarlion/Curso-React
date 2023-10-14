import React from "react";
import { TodoIcon } from '../TodoIcon';

function DeleteIcon (props){
    return (
        <span onClick={props.deleteCruz}>
            <TodoIcon
                type='delete'
                color='#3D3938'
            />  
        </span>
        
    );
};

export { DeleteIcon };