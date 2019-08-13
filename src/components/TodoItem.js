import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    return (
        <div>
            <span 
            style={{textDecoration: props.completed ? 'line-through' : ''}}
            onClick={props.onClick}  
            >
                {props.text}
            </span>
            <span onClick={props.onRemove}>&times;</span>
    </div> 
    )
}

export default TodoItem;