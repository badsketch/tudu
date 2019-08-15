import React from 'react';
import './App.css';
import TodoList from 'containers/TodoList';
import Columns from 'components/Columns';
import TodoListCreate from 'containers/TodoListCreate';
import { DndProvider } from 'react-dnd';
import HTMl5Backend from 'react-dnd-html5-backend';


import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <Columns>
      <DndProvider backend={HTMl5Backend}>
        {
            props.todoLists.map(tl => <TodoList key={tl} column={tl} />)
          }
        </DndProvider>
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
