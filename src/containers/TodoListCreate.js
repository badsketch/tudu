import React, { useState } from 'react';
import './TodoListCreate.css'
import { AddTodoList } from '../actions';
import { connect } from 'react-redux';

function TodoListCreate(props) {

    const [username, createName] = useState("")

    const handleChange = e => {
        createName(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.dispatch(AddTodoList(username))
        createName("");
    }

    return (
        <div id="todo-list-create">
            <form>
                <input type="text" value={username} onChange={handleChange}/>
                <input type="submit" value="+" className="plus-sign" onClick={handleSubmit}/>
            </form>
        </div>
    )
}

export default connect()(TodoListCreate);

