import './TodoList.css';

function TodoList({children}){
    return (
        <div className='container-ul'>
            <ul> 
                {children}
                <div className='div-reyeno'></div>
            </ul>
        </div>
        
    );
};

export { TodoList };