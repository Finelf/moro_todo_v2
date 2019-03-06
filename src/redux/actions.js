//import Actions from './constants'
import axios from 'axios';

const apiUrl = 'http://localhost:8080/todos';

export const Actions = {
    ADD_TODO: 'ADD_TODO', // done
    GET_TODO: 'GET_TODO', // done
    GET_COMPLETE_TODO: 'GET_COMPLETE_TODO', //in progress
    GET_INCOMPLETE_TODO: 'GET_INCOMPLETE_TODO', //in progress
    DELETE_TODO: 'DELETE_TODO', // in progress
    UPDATE_TODO: 'UPDATE_TODO',
    COMPLETE_TODO: 'COMPLETE_TODO',
    INCOMPLETE_TODO: 'INCOMPLETE_TODO',
};

export const addTodo = (val) => ({
    type: Actions.ADD_TODO,
    payload: {text: val.text,}
});

export const addNewTodo = (payload) => {
    return dispatch => {
        return axios.post(apiUrl, {
            text: payload.text
        }).then(response => {
            console.log('response', response)
        })
    }
}

export const getTodo = (todos) => ({
    type: Actions.GET_TODO,
    payload: todos
});
export const fetchAllTodos = () => {
    return dispatch => {
        return axios.get(apiUrl)
            .then(response => {
                dispatch(getTodo(response.data))
            }).catch(error => {
                throw(error)
            })
    }
};

export const getCompleteTodo = (val) => ({
    type: 'GET_COMPLETE_TODO',
    payload: val
});
export const fetchCompleteTodos = () => {
    return dispatch => {
        return axios.get(`${apiUrl}/complete`)
            .then(response => {
                dispatch(getTodo(response.data))
            }).catch(error => {
                throw(error)
            })
    }
};

export const getIncompleteTodo = (val) => ({
    type: 'GET_INCOMPLETE_TODO',
    payload: val
});
export const fetchIncompleteTodos = () => {
    return dispatch => {
        return axios.get(`${apiUrl}/complete`)
            .then(response => {
                dispatch(getTodo(response.data))
            }).catch(error => {
                throw(error)
            })
    }
};

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: id
});
export const deleteItem = (id) => {
    return dispatch => {
        return axios.delete(`${apiUrl}/${id}`)
            .then(response => {
                dispatch(deleteTodo(response.data))
                console.log(response.data)
            })
    }
}
export const updateTodo = (val) => ({
    type: 'UPDATE_TODO',
    payload: {
        id: val.id,
        text: val.text,
    }
});
export const completeTodo = (val) => ({
    type: 'COMPLETE_TODO',
    payload: {
        id: val.id,
        completed: true
    }
});
export const incompleteTodo = (val) => ({
    type: 'INCOMPLETE_TODO',
    payload: {
        id: val.id,
        completed: false
    }
});