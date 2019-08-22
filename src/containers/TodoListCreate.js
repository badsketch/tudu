import React, { useState } from 'react';
import './TodoListCreate.css'
import { AddTodoList } from '../store/todoActions';
import { connect } from 'react-redux';

function TodoListCreate(props) {

    const [newColName, createName] = useState("")

    const handleChange = e => {
        createName(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (newColName !== "") {
            props.dispatch(AddTodoList(newColName))
            createName("");
        }
    }

    return (
        <div id="todo-list-create">
            <form>
                <div>
                    <label>New Column: &nbsp;
                    <input type="text" className="name-input" value={newColName} onChange={handleChange}/>
                    </label>
                </div>
                <button type="submit" className="plus-sign" onClick={handleSubmit}>+</button>
            </form>
            {/* <span onClick={handleSubmit}>+</span> */}
        </div>
    )
}

export default connect()(TodoListCreate);

