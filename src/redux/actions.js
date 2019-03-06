//import Actions from './constants'
import axios from 'axios';

const apiUrl = 'http://localhost:8080/todos';

export const Actions = {
    ADD_TODO: 'ADD_TODO', // done
    GET_TODO: 'GET_TODO', // done
    GET_COMPLETE_TODO: 'GET_COMPLETE_TODO', // done
    GET_INCOMPLETE_TODO: 'GET_INCOMPLETE_TODO', //in progress
    DELETE_TODO: 'DELETE_TODO', // done
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
        }).then(() => {
            dispatch(fetchAllTodos())
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
export const fetchCompleteTodos = () => {
    return dispatch => {
        return axios.get(`${apiUrl}/completed`)
            .then(response => {
                dispatch(getTodo(response.data))
            }).catch(error => {
                throw(error)
            })
    }
};
export const fetchIncompleteTodos = () => {
    return dispatch => {
        return axios.get(`${apiUrl}?completed=false`)
            .then(response => {
                dispatch(getTodo(response.data))
            }).catch(error => {
                throw(error)
            })
    }
};
export const deleteItem = (id) => {
    console.log('delete', id.id)
    return dispatch => {
        return axios.delete(apiUrl+'/'+id.id)
            .then(() => {
                dispatch(fetchAllTodos())
            }).catch(error => {
                throw(error)
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