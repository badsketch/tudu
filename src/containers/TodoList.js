import React from 'react';
import TodoCreateForm from './TodoCreateForm';
import TodoItem from 'components/TodoItem';

import { connect } from 'react-redux';

class TodoList extends React.Component {

    handleClick = index => {
        this.props.dispatch({ type: 'COMPLETE_TODO', index })
    }

    handleRemove = index => {
        this.props.dispatch({ type: 'REMOVE_TODO', index });
    }

    render() {
        return (
            <div>
                <header>Todos</header>
                {
                    this.props.todoList.map((todo, idx) => 
                        <TodoItem 
                            key={idx}
                            text={todo.desc}
                            completed={todo.completed}
                            onClick={() => this.handleClick(idx)}
                            onRemove={() => this.handleRemove(idx)}
                        />
                    )
                }
                <TodoCreateForm />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todoList: state.todos
    }
}
export default connect(mapStateToProps)(TodoList);