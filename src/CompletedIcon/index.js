import React from "react";
import { TodoIcon } from '../TodoIcon';



function CompletedIcon(props){
    return (
        <span onClick={props.changeCheck}>
            <TodoIcon
                type='check'
                color={ props.completed ? '#2BE157' : '#3D3938'}
            /> 
        </span>
            
    )
};


export { CompletedIcon };