import React, {Component} from 'react';
import {connect} from 'react-redux'
import {deleteItem,
    fetchAllTodos,
    fetchCompleteTodos,
    fetchIncompleteTodos,
    deleteComplete,
    completeTodo} from "../redux/actions";

class Footer extends Component {
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
            <div className='footer'>
                    <div onClick={() => this.completeAll()}>Complete all</div>
                    <div onClick={fetchAll}>All</div>
                    <div onClick={fetchComplete}>Complete</div>
                    <div onClick={fetchIncomplete}>Incomplete</div>
                    <div onClick={() => this.deleteComplete()}>Delete complete</div>
            </div>
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