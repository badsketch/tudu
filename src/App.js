import React from 'react';
import './App.css';
import TodoList from 'containers/TodoList';
import Columns from 'components/Columns';

function App() {
  return (
    <div className="App">
      <Columns>
        <TodoList column="unassigned"/>
        <TodoList column="woops"/>
      </Columns>
    </div>
  );
}


export default App;
