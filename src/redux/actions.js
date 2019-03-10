import axios from 'axios';

const apiUrl = 'http://localhost:8080/todos';

export const Actions = {
    GET_TODO: 'GET_TODO',
    ADD_TODO: 'ADD_TODO',
    DELETE_TODO: 'DELETE_TODO',
    DELETE_COMPLETE: 'DELETE_COMPLETE',
    TOGGLE_EDITING: 'TOGGLE_EDITING',
    TOGGLE_DONE: 'TOGGLE_DONE',
    UPDATE_TODO: 'UPDATE_TODO',
    LOADING: 'LOADING'
};
export const loading = (payload) => ({
    type: Actions.LOADING,
    payload
});
export const toggleEditing = (payload) => ({
    type: Actions.TOGGLE_EDITING,
    payload
});
export const getTodo = (payload) => ({
    type: Actions.GET_TODO,
    payload
});
export const fetchAllTodos = () => {
    return dispatch => {
        return (
            dispatch(loading()),
            axios.get(apiUrl)
        ).then(response => {
            response.data.forEach(item => {
                item['isEditing'] = false;
            })
            dispatch(getTodo(response.data))
            dispatch(loading())
        }).catch(error => {
            throw(error)
        })
    }
};

export const addTodo = (payload) => ({
    type: Actions.ADD_TODO,
    payload
})
export const addNewTodo = (payload) => {
    return dispatch => {
        return axios.post(apiUrl, {
            text: payload.text
        }).then(response => {
            response.data.isEditing = false;
            console.log(response.data)
            dispatch(addTodo(response.data))
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
        return axios.get(`${apiUrl}/incompleted`)
            .then(response => {
                dispatch(getTodo(response.data))
            }).catch(error => {
                throw(error)
            })
    }
};
export const deleteTodo = (payload) => ({
    type: Actions.DELETE_TODO,
    payload
})
export const deleteItem = (id) => {
    return dispatch => {
        return axios.delete(apiUrl + '/' + id.id)
            .then(() => {
                dispatch(deleteTodo(id.id))
            }).catch(error => {
                throw(error)
            })
    }
}

export const deleteCompleteTodos = () => ({
    type: Actions.DELETE_COMPLETE
})
export const deleteComplete = () => {
    return dispatch => {
        return axios.delete(apiUrl + '/completed')
            .then(() => {
                dispatch(deleteCompleteTodos())
            }).catch(error => {
                throw(error)
            })
    }
}
export const toggleDone = (payload) => ({
    type: Actions.TOGGLE_DONE,
    payload
})
export const completeTodo = (id) => {
    return dispatch => {
        return axios.post(apiUrl + '/' + id.id + '/complete', {
            id: id.id
        }).then(() => {
            dispatch(toggleDone(id.id))
        }).catch(error => {
            throw(error)
        })
    }
}
export const incompleteTodo = (id) => {
    return dispatch => {
        return axios.post(apiUrl + '/' + id.id + '/incomplete', {
            id: id.id
        }).then(() => {
            dispatch(toggleDone(id.id))
        }).catch(error => {
            throw(error)
        })
    }
};
export const updateTodo = (payload) => ({
    type: Actions.UPDATE_TODO,
    payload
})
export const updateTodoItem = (payload) => {
    return dispatch => {
        return axios.post(apiUrl + '/' + payload.id, {
            text: payload.text,
            id: payload.id
        }).then(() => {
            dispatch(updateTodo(payload))
        }).catch(error => {
            throw(error)
        })
    }
};