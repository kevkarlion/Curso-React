import React from "react";
import { TodoIcon } from './TodoIcon';



function CompletedIcon(props){
    return (
        <span onClick={props.changeCheck}>
            <TodoIcon
                type='check'
                color={ props.completed ? 'green' : 'grey'}
                
                
            /> 
        </span>
            
    )
};


export { CompletedIcon };