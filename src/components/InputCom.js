import React, {Component, Fragment} from 'react';
import {addNewTodo} from "../redux/actions";
import {connect} from "react-redux";

class InputCom extends Component {
    state = {
        input: ''
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            input: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.props.addTodo({
            text: this.state.input

        })
        this.setState({input:''})
    }

    render() {

        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           onChange={this.handleChange}
                           name='form'
                           value={this.state.input}
                           placeholder='Přidej Úkol'
                           required
                    />
                </form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos:state.todos
    }
}
const mapDispatchToProps = dispatch => ({
    addTodo: val => dispatch(addNewTodo(val)),
})
export default connect(mapStateToProps, mapDispatchToProps)(InputCom);