import React, { useState } from 'react';
import './TodoCreateForm.css';

import { AddTodo } from '../store/todoActions';
import { connect } from 'react-redux';

function TodoCreateForm(props) {

    const [todoText, setTodoText] = useState("");
    const [assignedTo, setAssigned] = useState(1);
    const handleChange = e => {
        setTodoText(e.target.value)
    }

    const handleSelectChange = e => {
        setAssigned(e.target.value);
        console.log(assignedTo);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (todoText !== "") {
            props.dispatch(AddTodo(todoText, props.todoColumn, assignedTo));
            setTodoText("");
        }
    }
    return (
        <form id="todo-create-form">
            <input type="text" value={todoText} onChange={handleChange}/>
            <select name="assigned" onChange={handleSelectChange} value={assignedTo}>
                {
                    props.users.map(([id, {username}]) => {
                        return (
                            <option key={id} value={id}>
                                {username}
                            </option>
                        )
                    })
                }
            </select>
            <input type="submit" value="Add Todo" onClick={handleSubmit}/>
        </form>
    )
}

function mapStateToProps(state) {
    const userArray = Object.entries(state.users);
    return {
        users: userArray
    }
}

export default connect(mapStateToProps)(TodoCreateForm);