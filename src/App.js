import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import TodoForm from './containers/TodoForm';

function App(props) {
  return (
    <div className="App">
      <header>Todos</header>
        {
          props.todoList.map(todo => <div key={todo.desc}>{todo.desc}</div>)
        }
        <TodoForm />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todoList: state.todos
  }
}

export default connect(mapStateToProps)(App);
