import React/*, { useCallback }*/ from 'react';
import './TodoList.css';
import TodoCreateForm from './TodoCreateForm';
import TodoItem from 'components/TodoItem';
import { connect } from 'react-redux';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../Constants';
import { ToggleTodo, RemoveTodo, /*MoveTodo*/ } from '../actions';

function TodoList(props) {

    const [{ isOver },drop] = useDrop({
        accept: ItemTypes.TODO,
        canDrop: (item, monitor) => item.colSrc !== props.id && !props.todos.length,
        drop: () => ({ colId: props.id }),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        })
    })
    const handleClick = (index, column) => {
        props.dispatch(ToggleTodo(index, column))
    }

    const handleRemove = (index, column) => {
        props.dispatch(RemoveTodo(index, column));
    }

    // TODO: test efficiency
    // const moveTodo = useCallback(
    //     (columnId, srcIndex, destIndex) => {
    //         props.dispatch(MoveTodo(columnId, srcIndex, destIndex))
    //     },
    //     [props.todos]
    // )

    return (
        <div id="todo-list" ref={drop} style={{ border: isOver ? '2px solid rgba(173, 216, 230, 0.3)' : '2px solid lightblue'}}>
            {/* <div id="todo-list"> */}
            <h3 className="title">{props.name}</h3>
            {
                props.todos.map(({id, desc, completed}, idx) =>
                
                    <TodoItem 
                        key={id} 
                        text={desc}
                        completed={completed}
                        onClick={() => handleClick(id, props.id)}
                        onRemove={() => handleRemove(id, props.id)}
                        // onMove={moveTodo}
                        id={id}
                        index={idx}
                        colId={props.id}
                    />
                )
            }
            <TodoCreateForm todoColumn={props.id} />
        </div>
    )
}



function mapStateToProps(state, ownProps) {
    const todoList = state.columns.filter(col => col.id === ownProps.id)[0];
    return {
        name: todoList.name,
        todos: todoList.items,
    }
}
export default connect(mapStateToProps)(TodoList);