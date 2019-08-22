import React, { useRef } from 'react';
import './TodoItem.css';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../Constants';
import { connect } from 'react-redux';
import { MoveTodo, MoveTodoToColumn } from '../actions';

function TodoItem(props) {
    const ref = useRef(null);

    const [{isDragging}, drag] = useDrag({
        item: { 
            type: ItemTypes.TODO, 
            colSrc: props.colId, 
            index: props.index
        },
        end: (item, monitor) => {
            if (monitor.didDrop()) {
                const result = monitor.getDropResult();
                props.dispatch(MoveTodoToColumn(item.colSrc, result.colId, item.index, 0))
            }
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),

        })
    })

    const [, drop] = useDrop({
        accept: ItemTypes.TODO,
        canDrop: (item, monitor) => false,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = props.index;
            const srcCol = item.colSrc;
            const destCol = props.colId;

            // if it's the same item, don't do anything
            // checking col otherwise can't drag to adjacent column at same level
            if (dragIndex === hoverIndex && srcCol === destCol) {
                return;
            }
            const hoverBoundingRect = ref.current.getBoundingClientRect();

            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

            const clientOffset = monitor.getClientOffset();

            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            if (srcCol !== destCol) {
                item.colSrc = destCol
                props.dispatch(MoveTodoToColumn(srcCol, destCol, dragIndex, hoverIndex));
            } else {
                props.dispatch(MoveTodo(srcCol, dragIndex, hoverIndex))
            }

            item.index = hoverIndex;
        }
    })
    drag(drop(ref));
    return (
        <div ref={ref} id="todo-item" style={{ opacity: isDragging ? 0 : 1 }}>
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