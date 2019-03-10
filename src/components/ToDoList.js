import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import {
    deleteItem,
    completeTodo,
    incompleteTodo,
    toggleEditing,
    updateTodoItem
} from "../redux/actions";

import IconEdit from '@material-ui/icons/Edit';
import IconClear from '@material-ui/icons/Clear';
import Checkbox from '@material-ui/core/Checkbox'

class ToDoList extends Component {
    state = {
        input: ''
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            input: e.target.value
        })
    }
    handleSubmit = (id) => {
        this.props.updateTodoItem({
            text: this.state.input,
            id:id
        })
    }
    handleDelete = (val) => {
        this.props.deleteTodo({
            id: val
        })
    }
    handleEdit = (val) => {
        this.props.toggleEditing({
            id: val
        })
    }
    toggleDone = (id, check) => {
        if(check === false){
            this.props.completeTodo({
                id: id
            })
        }
        else{
            this.props.incompleteTodo({
                id: id
            })
        }
    }

    render() {
        const {todos} = this.props
        return (
            <Fragment>
                <table cellSpacing="0">
                    <tbody>
                    {todos.map(todo => (
                        <tr key={todo.id}>
                            <td width="10%">
                                <Checkbox
                                    checked={todo.completed}
                                    onChange={() => this.toggleDone(todo.id, todo.completed)}
                                    color='default'
                                    value="toggle done"/>
                            </td>
                            <td className='text'>
                                {todo.isEditing ?
                                    <form onSubmit={(e) => {e.preventDefault(); this.handleSubmit(todo.id)}}>
                                        <input type="text"
                                               onChange={this.handleChange}
                                               name='form'
                                               value={this.state.input}
                                               placeholder={todo.text}
                                               required
                                        />
                                    </form> :
                                    <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</span>
                                }
                            </td>
                            <td width="15%">
                                <IconEdit className='icon' onClick={() => this.handleEdit(todo.id)}/>
                                <IconClear className='icon' onClick={() => this.handleDelete(todo.id)}/>
                            </td>
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
    updateTodoItem: val => dispatch(updateTodoItem(val)),
    incompleteTodo: val => dispatch(incompleteTodo(val)),
    toggleEditing: val => dispatch(toggleEditing(val)),

})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);