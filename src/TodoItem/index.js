import './TodoItem.css';
import React from 'react';
import { CompletedIcon } from '../CompletedIcon';
import { DeleteIcon } from '../DeleteIcon';



function TodoItem(props, children) {

  const changeCompleted = () => {
    const warning = props.text;
    props.ad(warning);
  }

  const deleteTodo = () => {
    const alarmDelete = props.text;
    props.deleteItemTodo(alarmDelete); 
  }

   
  return (
    <li>
      <CompletedIcon 
        changeCheck={changeCompleted}
        completed={props.completed}
      />
      <p 
        className={`container-text ${(props.completed && 'text-item')}`}>
        {props.text}
      </p>
      <DeleteIcon
        deleteCruz={deleteTodo}
      / >
    </li>
  );
};

export { TodoItem };