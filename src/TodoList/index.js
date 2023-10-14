import './TodoList.css';

function TodoList({children}){
    return (
        <div className='box-ul'>
            <ul>
                {children}
            </ul>
        </div>
        
    );
};

export { TodoList };