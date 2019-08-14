import React from 'react';
import './App.css';
import TodoList from 'containers/TodoList';
import Columns from 'components/Columns';
import TodoListCreate from 'containers/TodoListCreate';

import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <Columns>
        {
          props.todoLists.map(tl => <TodoList key={tl} column={tl} />)
        }
        <TodoListCreate />
      </Columns>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todoLists: Object.keys(state.columns)
  }
}

export default connect(mapStateToProps)(App);
