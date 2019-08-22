import React, { useState } from 'react';
import './TodoCreateForm.css';

import { AddTodo } from '../store/todoActions';
import { connect } from 'react-redux';

function TodoCreateForm(props) {

    const [todoText, setTodoText] = useState("");

    const handleChange = e => {
        setTodoText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (todoText !== "") {
            props.dispatch(AddTodo(todoText, props.todoColumn));
            setTodoText("");
        }
    }
    return (
        <form id="todo-create-form">
            <input type="text" value={todoText} onChange={handleChange}/>
            <input type="submit" value="Add Todo" onClick={handleSubmit}/>
        </form>
    )
}

export default connect()(TodoCreateForm);