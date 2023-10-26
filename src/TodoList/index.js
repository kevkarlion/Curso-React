import './TodoList.css';

function TodoList({children}){
    return (
        <div className='container-ul'>
            <ul> 
                {children}
            </ul>
        </div>
        
    );
};

export { TodoList };