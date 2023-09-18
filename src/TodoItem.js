import './styles/TodoItem.css';

function TodoItem (props){
    return (
      <li>
        <span className='check'></span>
        <p>{props.text}</p>
        <span className='nope'></span>
      </li>
    );
  };

  export {TodoItem };