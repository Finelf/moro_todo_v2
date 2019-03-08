import React, { Component } from 'react';
import InputCom from './components/InputCom'
import ToDoList from './components/ToDoList'
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
          <InputCom/>
          <ToDoList/>
          <Footer/>
      </div>
    );
  }
}

export default App;
