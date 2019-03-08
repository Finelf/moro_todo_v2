import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import {deleteItem,
    fetchAllTodos,
    fetchCompleteTodos,
    fetchIncompleteTodos,
    deleteComplete,
    completeTodo} from "../redux/actions";

import Button from '@material-ui/core/Button';

class Footer extends Component {
    doneCount = () => {
        let count = this.props.todos.filter( x => {
            return x.completed
        }).length;
        return count
    }
    completeAll = () => {
        this.props.todos.forEach(item => {
            if(item.completed === false){
                this.props.completeTodo({id: item.id})
            }
        })
    }
    deleteComplete = () => {
        this.props.todos.forEach(item => {
            if (item.completed ===  true){
                this.props.deleteTodo({id: item.id})
            }
        })
    }
    render() {
        const {fetchAll, fetchComplete, fetchIncomplete} = this.props
        return (
            <Fragment>
                    <Button onClick={() => this.completeAll()}>Complete all</Button>
                    <Button onClick={fetchAll}>All</Button>
                    <Button onClick={fetchComplete}>Complete</Button>
                    <Button onClick={fetchIncomplete}>Incomplete</Button>
                    <Button onClick={() => this.deleteComplete()}>Delete complete</Button>
                    <div>Done {this.doneCount()}</div>
            </Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = dispatch => ({
    deleteTodo: val => dispatch(deleteItem(val)),
    deleteComplete: val => dispatch(deleteComplete(val)),
    fetchAll: val => dispatch(fetchAllTodos(val)),
    fetchComplete: val => dispatch(fetchCompleteTodos(val)),
    fetchIncomplete: val => dispatch(fetchIncompleteTodos(val)),
    completeTodo: val => dispatch(completeTodo(val)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Footer);