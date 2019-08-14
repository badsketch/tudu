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
                <div>
                    <label>New Column: &nbsp;
                    <input type="text" className="name-input" value={username} onChange={handleChange}/>
                    </label>
                </div>
                <button type="submit" className="plus-sign" onClick={handleSubmit}>+</button>
            </form>
            {/* <span onClick={handleSubmit}>+</span> */}
        </div>
    )
}

export default connect()(TodoListCreate);

