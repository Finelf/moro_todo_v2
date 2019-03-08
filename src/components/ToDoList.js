import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import {
    deleteItem,
    completeTodo,
    incompleteTodo
} from "../redux/actions";

import IconEdit from '@material-ui/icons/Edit';
import IconClear from '@material-ui/icons/Clear';
import Checkbox from '@material-ui/core/Checkbox'

class ToDoList extends Component {
    state = {
        isEditing: false
    }
    handleDelete = (val) => {
        this.props.deleteTodo({
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
                                {this.state.isEditing ? <div/> :
                                    <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</span>
                                }
                            </td>
                            <td width="15%">
                                <IconEdit onClick={() => this.setState({isEditing: true})}/>
                                <IconClear onClick={() => this.handleDelete(todo.id)}/>
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
    incompleteTodo: val => dispatch(incompleteTodo(val)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);