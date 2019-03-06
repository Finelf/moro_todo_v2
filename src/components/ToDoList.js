import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import {deleteTodo} from "../redux/actions";
import {updateTodo} from "../redux/actions";

import Button from '@material-ui/core/Button';
import IconEdit from '@material-ui/icons/Edit';
import IconClear from '@material-ui/icons/Clear';


class ToDoList extends Component {
    handleDelete = (val) => {
        this.props.deleteTodo({
            id: val
        })
    }
    render() {
        const {todos} = this.props
        return (
            <Fragment>
                <table>
                    <tbody>
                        <tr>
                            <th>Todos</th>
                        </tr>
                        {todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.text}</td>
                                <td><Button><IconEdit/></Button></td>
                                <td><Button><IconClear onClick={() => this.handleDelete(todo.id)}/></Button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
    deleteTodo: val => dispatch(deleteTodo(val)),
    updateTodo: val => dispatch(updateTodo(val)),
})

export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);