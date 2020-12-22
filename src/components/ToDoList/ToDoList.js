import React from 'react';
import './ToDoList.css';

const ToDoList = ({ todos , onDeleteTodo}) => (
    <ul className="TodoList">
        {todos.map(({id, text}) => (<li key={id} className="TodoList__item">
            <p className="TodoList__text">{text}</p>
            <button onClick={() => onDeleteTodo(id)}>Удалить</button>
        </li>
        ))}
    </ul>
    

);

export default ToDoList;

