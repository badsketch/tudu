import React, { useState } from 'react';
import { AddTodo } from '../actions';
import { connect } from 'react-redux';

function TodoForm(props) {

    const [todoText, setTodoText] = useState("");

    const handleChange = e => {
        setTodoText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.dispatch(AddTodo(todoText));
        setTodoText("");
    }
    return (
        <form>
            <label>Add Todo:
                <input type="text" value={todoText} onChange={handleChange}/>
            </label>
            <input type="submit" value="Submit" onClick={handleSubmit}/>
        </form>
    )
}

export default connect()(TodoForm);