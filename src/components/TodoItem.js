import React, { useRef } from 'react';
import './TodoItem.css';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../Constants';
import { connect } from 'react-redux';
import { AddTodo, AddTodoAtIndex, RemoveTodo, Swap } from '../actions';

function TodoItem(props) {
    const ref = useRef(null);

    const [{isDragging}, drag] = useDrag({
        item: { 
            type: ItemTypes.TODO, 
            desc: props.text, 
            colSrc: props.colId, 
            completed: props.completed,
            index: props.id
        },
        end: (item, monitor) => {
            // if (monitor.didDrop()) {
            //     const result = monitor.getDropResult();
            //     props.dispatch(AddTodo(item.desc, result.colId, item.completed));
            //     props.dispatch(RemoveTodo(props.id, item.colSrc))
            // }
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),

        })
    })

    const [, drop] = useDrop({
        accept: ItemTypes.TODO,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }

            const dragIndex = item.index;
            const hoverIndex = props.id;

            if (dragIndex === hoverIndex) {
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
            console.log('DRAG: ', dragIndex);
            console.log('HOVER: ', hoverIndex);
            // if (dragIndex > hoverIndex) {

            // }
            props.onMove(item.desc, item.colSrc, item.completed, dragIndex, hoverIndex)
            // props.dispatch(Swap(item.desc, item.colSrc, item.completed, dragIndex, hoverIndex))
            // props.dispatch(RemoveTodo(dragIndex, item.colSrc));
            // props.dispatch(AddTodoAtIndex(item.desc, item.colSrc, item.completed, hoverIndex ));

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