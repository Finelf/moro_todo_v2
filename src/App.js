import React, {Component} from 'react';
import {connect} from 'react-redux'
import InputCom from './components/InputCom'
import ToDoList from './components/ToDoList'
import Footer from "./components/Footer";

import IconLoop from '@material-ui/icons/Loop';
import './App.css'

class App extends Component {
    doneCount = () => {
        let count = this.props.todos.filter( x => {
            return x.completed
        }).length;
        return count
    }
    render() {
        return (
            <div className="App">
                <div className='pohled'></div>
                <div className='paper'>
                    {this.props.isLoading ? <IconLoop className='animate'/> : null}
                    <div className='kostici'> </div>
                    <InputCom/>
                    <ToDoList/>
                    <Footer/>
                </div>
                <div className='doneCount'>Done {this.doneCount()}</div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        todos: state.todos,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(App);
