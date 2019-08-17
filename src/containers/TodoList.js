import React from 'react';
import './TodoList.css';
import TodoCreateForm from './TodoCreateForm';
import TodoItem from 'components/TodoItem';
import { connect } from 'react-redux';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../Constants';
import { ToggleTodo, RemoveTodo } from '../actions';

function TodoList(props) {

    const [{ isOver },drop] = useDrop({
        accept: ItemTypes.TODO,
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

    return (
        <div id="todo-list" ref={drop} style={{ opacity: isOver ? '0.5' : '1'}}>
            <h3 className="title">{props.name}</h3>
            {
                props.todos.map(({desc, completed}, idx) => 
                    <TodoItem 
                        key={idx} 
                        text={desc}
                        completed={completed}
                        onClick={() => handleClick(idx, props.id)}
                        onRemove={() => handleRemove(idx, props.id)}
                        id={idx}
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
        todos: todoList.items
    }
}
export default connect(mapStateToProps)(TodoList);