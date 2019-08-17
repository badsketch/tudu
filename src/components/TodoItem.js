import React from 'react';
import './TodoItem.css';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../Constants';
import { connect } from 'react-redux';
import { AddTodo, RemoveTodo } from '../actions';

function TodoItem(props) {

    const [{isDragging}, drag] = useDrag({
        item: { type: ItemTypes.TODO, desc: props.text, colSrc: props.colId, completed: props.completed },
        end: (item, monitor) => {
            if (monitor.didDrop()) {
                const result = monitor.getDropResult();
                props.dispatch(AddTodo(item.desc, result.colId, item.completed));
                props.dispatch(RemoveTodo(props.id, item.colSrc))
            }
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),

        })
    })

    return (
        <div ref={drag} id="todo-item" style={{ opacity: isDragging ? 0.5 : 1 }}>
            <span 
            style={{textDecoration: props.completed ? 'line-through' : ''}}
            onClick={props.onClick}  
            >
                {props.text}
            </span>
            <span className="remove" onClick={props.onRemove}>&times;</span>
    </div> 
    )
}

export default connect()(TodoItem);