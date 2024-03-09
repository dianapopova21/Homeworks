import { combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, FETCH_TODOS_SUCCESS } from './actions';

const initialState = {
    todos: []
};
function generateUniqueId() {
    return uuidv4();
}

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                id: generateUniqueId(),
                text: action.payload,
                completed: false
            };
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                )
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload.todos
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    todos: todoReducer
});

export default todoReducer;
