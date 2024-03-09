import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import './styles.css';

function TodoForm() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            dispatch(addTodo(text.trim()));
            setText('');
        }
    };

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a task..."
                className="TodoForm-input"
            />
            <button type="submit" className="TodoForm-button">Add</button>
        </form>
    );
}

export default TodoForm;
