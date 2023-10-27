import React from 'react';
import './TodosLoading.css';
import ReactLoading from 'react-loading';





function TodosLoading(){
  


  return (
    <div className='container-loading'>
      <ReactLoading type='spin' color='black '/>
      <p> Cargando ... </p> 
    </div> 
  )
};

export { TodosLoading };
