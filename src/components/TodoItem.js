import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    return (
        <div id="todo-item">
            <span 
            style={{textDecoration: props.completed ? 'line-through' : ''}}
            onClick={props.onClick}  
            >
                {props.text}
            </span>
            <span class="remove" onClick={props.onRemove}>&times;</span>
    </div> 
    )
}

export default TodoItem;