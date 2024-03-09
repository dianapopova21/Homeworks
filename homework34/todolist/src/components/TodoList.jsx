import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteTodo, toggleTodo} from "../redux/actions";
import './styles.css';

function TodoList() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    if (!Array.isArray(todos)) {
        console.error('Todos is not an array:', todos);
        return null; 
    }

    return (
        <div className="TodoList">
            <h2>Your task list:</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
            <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
