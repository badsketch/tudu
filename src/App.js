import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import TodoForm from './containers/TodoForm';

function App(props) {

  const handleClick = index => {
    props.dispatch({ type: 'COMPLETE_TODO', index })
  }
  const handleRemove = index => {
    props.dispatch({ type: 'REMOVE_TODO', index });
  }
  return (
    <div className="App">
      <header>Todos</header>
        {
          props.todoList.map((todo, idx) =>
          <div>
            <span 
              key={idx} 
              style={{textDecoration: todo.completed ? 'line-through' : ''}}
              onClick={() => handleClick(idx)}  
              >
              {todo.desc}
            </span>
            <span onClick={() => handleRemove(idx)}>&times;</span>

          </div> 
          )
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
