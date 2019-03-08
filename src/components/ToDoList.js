import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import {
    deleteItem,
    updateTodo,
    fetchAllTodos,
    fetchCompleteTodos,
    fetchIncompleteTodos,
    deleteComplete,
    completeTodo
} from "../redux/actions";

import Button from '@material-ui/core/Button';
import IconEdit from '@material-ui/icons/Edit';
import IconClear from '@material-ui/icons/Clear';
import Checkbox from '@material-ui/core/Checkbox'
import InputCom from "./InputCom";


class ToDoList extends Component {
    state = {
        isEditing: false
    }
    handleDelete = (val) => {
        this.props.deleteTodo({
            id: val
        })
    }
    handleComplete = (val) => {
        this.props.completeTodo({
            id: val
        })
    }
    onCheck = () => {

    }

    render() {
        const {todos, completeTodo} = this.props
        return (
            <Fragment>
                <table>
                    <tbody>
                    <tr>
                        <th>Todos</th>
                    </tr>
                    {todos.map(todo => (
                        <tr key={todo.id}>
                            <td><Button onClick={() => this.handleComplete(todo.id)}>Complete</Button></td>
                            <td>
                                <div //Field
                                    //name="employed"
                                    //id="employed"
                                    //component={input}
                                    //type="checkbox"
                                />

                                <Checkbox //checked={}
                                    //onChange={}
                                    //value={}}
                                />
                            </td>
                            <td>
                                {this.state.isEditing ? <div/> :
                                    <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</span>
                                }
                            </td>
                            <td><Button><IconEdit onClick={() => this.setState({isEditing: true})}/></Button></td>
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
    deleteTodo: val => dispatch(deleteItem(val)),
    completeTodo: val => dispatch(completeTodo(val)),
    updateTodo: val => dispatch(updateTodo(val)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);