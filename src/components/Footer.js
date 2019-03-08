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
        let count = this.props.todos.filter((x) => {
            return x.completed
        }).length;
        return count
    }
    render() {
        const {fetchAll, fetchComplete, fetchIncomplete, deleteComplete, completeAll} = this.props
        return (
            <Fragment>
                    <Button onClick={completeAll}>Complete all</Button>
                    <Button onClick={fetchAll}>All</Button>
                    <Button onClick={fetchComplete}>Complete</Button>
                    <Button onClick={fetchIncomplete}>Incomplete</Button>
                    <Button onClick={deleteComplete}>Delete complete</Button>
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
    //completeAll: val => dispatch(completeAll(val)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Footer);