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
        drop: () => ({ colName: props.column }),
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
            <h3 className="title">{props.column}</h3>
            {
                props.todoList.map(([id, todo]) => 
                    <TodoItem 
                        key={id}
                        text={todo.desc}
                        completed={todo.completed}
                        onClick={() => handleClick(id, props.column)}
                        onRemove={() => handleRemove(id, props.column)}
                        id={id}
                        colName={props.column}
                    />
                )
            }
            <TodoCreateForm todoColumn={props.column} />
        </div>
    )
}



function mapStateToProps(state, ownProps) {
    return {
        todoList: Object.entries(state.columns[ownProps.column])
    }
}
export default connect(mapStateToProps)(TodoList);