import React, { Component } from 'react';
import InputCom from './components/InputCom'
import ToDoList from './components/ToDoList'

class App extends Component {
  render() {
    return (
      <div className="App">
          <InputCom/>
          <ToDoList/>
      </div>
    );
  }
}

export default App;
