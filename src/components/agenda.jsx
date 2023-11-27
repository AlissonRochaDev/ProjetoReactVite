import React from 'react';

// todo é um PROPS (Propriedade / Parâmetro)
const Agenda = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
        <div className='content'>
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
        </div>
        <div>
        <button className="completar" onClick={() => completeTodo(todo.id)}>Completar</button>
        <button className="excluir" onClick={() => removeTodo(todo.id)}>Excluir</button>
        </div>
    </div>
  );
};

export default Agenda;