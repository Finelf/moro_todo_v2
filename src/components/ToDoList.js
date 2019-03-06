import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import {deleteItem, updateTodo, fetchAllTodos, fetchCompleteTodos, fetchIncompleteTodos} from "../redux/actions";

import Button from '@material-ui/core/Button';
import IconEdit from '@material-ui/icons/Edit';
import IconClear from '@material-ui/icons/Clear';


class ToDoList extends Component {
    handleDelete = (val) => {
        console.log(val);
        this.props.deleteTodo({
            id: val
        })
    }
    render() {
        const {todos, fetchAll, fetchComplete, fetchIncomplete} = this.props
        return (
            <Fragment>
                <table>
                    <tbody>
                        <tr>
                            <th>Todos</th>
                        </tr>
                        {todos.map(todo => (
                            <tr key={todo.id} >
                                <td style={{textDecoration: todo.completed? 'line-through' : 'none'}}>{todo.text}</td>
                                <td><Button><IconEdit/></Button></td>
                                <td><Button><IconClear onClick={() => this.handleDelete(todo.id)}/></Button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    {/*<button onClick={completeAll}>Incomplete</button>*/}
                    <button onClick={fetchAll}>All</button>
                    <button onClick={fetchComplete}>Complete</button>
                    <button onClick={fetchIncomplete}>Incomplete</button>
                    {/*<button onClick={deleteAllComplete}>Incomplete</button>*/}
                </div>
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
    fetchAll: val => dispatch(fetchAllTodos(val)),
    fetchComplete: val => dispatch(fetchCompleteTodos(val)),
    fetchIncomplete: val => dispatch(fetchIncompleteTodos(val)),
    updateTodo: val => dispatch(updateTodo(val)),
})

export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);