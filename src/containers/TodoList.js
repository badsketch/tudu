import React from 'react';
import './TodoList.css';
import TodoCreateForm from './TodoCreateForm';
import TodoItem from 'components/TodoItem';

import { connect } from 'react-redux';

class TodoList extends React.Component {
    handleClick = (index, column) => {
        this.props.dispatch({ type: 'COMPLETE_TODO', index, column })
    }

    handleRemove = (index, column) => {
        this.props.dispatch({ type: 'REMOVE_TODO', index, column });
    }

    render() {
        return (
            <div id="todo-list">
                <h3 className="title">{this.props.column}</h3>
                {
                    this.props.todoList.map((todo, idx) => 
                        <TodoItem 
                            key={idx}
                            text={todo.desc}
                            completed={todo.completed}
                            onClick={() => this.handleClick(idx, this.props.column)}
                            onRemove={() => this.handleRemove(idx, this.props.column)}
                        />
                    )
                }
                <TodoCreateForm todoColumn={this.props.column} />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        todoList: state.columns[ownProps.column]
    }
}
export default connect(mapStateToProps)(TodoList);