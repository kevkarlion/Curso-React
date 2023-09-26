import './styles/TodoItem.css';
import React from 'react';

function TodoItem(props) {
  // const [iconItem, setIconItem] = React.useState('');

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
      <span
        onClick={changeCompleted}
        className={`check ${ props.completed && 'check-active'}`}>
      </span>
      <p 
        className={`${props.completed && 'text-item'}`}>
        {props.text}
      </p>
      <span
        onClick={deleteTodo} 
        className='nope'></span>
    </li>
  );
};

export { TodoItem };